import { DollarCircleFilled,  ShoppingCartOutlined, ShoppingOutlined, UserOutlined, } from '@ant-design/icons'
import { Card, Space, Statistic, Table  } from 'antd'
import { Typography  } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { getCustomer, getInventory, getOrder, getRevenue } from '../../../API'
import { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Dashboard = () => {
  const[Order, setOrder]= useState(0);
  const [revenue, setRevenue]= useState(0);
  const [Inventory,setInventory]= useState(0);
  const [Customer, setCustomer]= useState(0);

  useEffect(() => {
    getOrder().then((res)=>{
      setOrder(res.total)
      setRevenue(res.discountedTotal)
    });
    getInventory().then((res)=>{
      setInventory(res.total)
    });
    getCustomer().then((res)=>{
      setCustomer(res.total)
    });
  }, [])









  return (
    <Space Size={24} direction='vertical'    >
      <Typography.Title level={4} >Dashboard</Typography.Title>
      <Space direction='horizontal'>
        <DashboardCard 
        icon={<ShoppingCartOutlined 
        style={{color:"green",
          backgroundColor:"rgba(0, 255, 0, 0.5)",
          borderRadius: 20,
          fontSize:24,
          padding:8,
        }}/>}
         title={"Oders"} 
         value={Order}/>
        <DashboardCard 
        icon={< ShoppingOutlined 
          style={{color:"blue",
            backgroundColor:"rgba(0, 0, 255, 0.25)",
            borderRadius: 20,
            fontSize:24,
            padding:8,}}
          />} 
        title={"Inventory"}
         value={Inventory}/>
        <DashboardCard 
        icon={< UserOutlined  
          style={{color:"purple",
            backgroundColor:"rgba(0, 255, 255, 0.25)",
            borderRadius: 20,
            fontSize:24,
            padding:8,}}
          />} 
        title={"Customer"} 
        value={Customer}/>
        <DashboardCard
         icon={<DollarCircleFilled
          style={{color:"red",
            backgroundColor:"rgba(255, 0, 0, 0.5)",
            borderRadius: 20,
            fontSize:24,
            padding:8,}}/>} 
         title={"Revenue"} 
         value={revenue}/> 
      </Space> <br />
      <Space>
        <RecentOrder/>
        <DashboardChart/>
      </Space>
    </Space>
  )
}
function DashboardCard({title, value ,icon} ) {
  return (
    <Card>
          <Space direction="horizontal" >
            {icon}
             <Statistic title={title} value={value} />
          </Space>
        </Card>
  )
}

function RecentOrder(){ 
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getOrder().then(res => {
      setDataSource(res.products.slice(0,3))
      setLoading(false)
    
    })
  }, [])  
    return (
    <>
    <Typography.Text>Recent Order</Typography.Text>
    <Table 
    columns= {[
      {
        title:"title", 
        dataIndex:"title",
      },
      {
        title:"Quantity",
        dataIndex:"quantity",
      },
      {
        title:"Price",
        dataIndex:"price",
      },
    ]} 
    loading={loading}
    dataSource={dataSource}
    pagination={false}
    >
    </Table> 
    </>
    )
}
function DashboardChart() {
  const [revenueData , setRevenueData] = useState({
    labels: [],
    datasets: [],
  });

 useEffect(() => {
  getRevenue().then(res=>{
    const labels=res.carts.map((cart)=>{
      return `user-${cart.userId}`
    });
    const data=res.carts.map((cart)=>{
      return cart.discountedTotal;
    });
    const dataSource=  {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: data,
        backgroundColor: 'rgba(248, 14, 14, 0.5)',
      },
    ],
  };
      setRevenueData(dataSource);

  })
 },[])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', 
      },
      title: {
        display: true,
        text: 'Order Revenue',
      },
    },
  };
  return (
  <Card style={{width:500,height:250}}>
  <Bar options={options} data={revenueData} /></Card>);
}
export default Dashboard
