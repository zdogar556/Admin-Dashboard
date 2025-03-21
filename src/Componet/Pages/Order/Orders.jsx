import { Table, Typography,Space, Avatar } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getOrders } from '../../../API';

const Orders = () => {
  const [loading, setLoading]= useState(false);
  const [dataSource, setDataSource]=useState([]);
  

  useEffect(()=>{
    setLoading(true)
    getOrders().then(res=>{
      setDataSource(res.products)
      setLoading(false)
    })
    
  },[])

  return (
    <Space size={20} direction='vertical'>
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table 
      loading={loading}
      columns={[
        {
        title:"Title",
        dataIndex:"title"
      },
      {
        title:"Price",
        dataIndex:"price",
        render:(value)=><span>${value}</span>
      },
      {
        title:"DiscountPercentage",
        dataIndex:"discountPercentage",
        render:(value)=><span>${value}</span>
      },
      {
        title:"Quantity",
        dataIndex:"quantity",
        // render:(rating)=>{
        //   return <Rate value={rating} allowHalf disable />
        // }
      },
      {
        title:"Total",
        dataIndex:"total",
      },
      {
        title:"Category",
        dataIndex:"category"
      },
      ]}
      dataSource={dataSource}
      pagination={{
        pageSize:5,
      }}
       >

      </Table>
    </Space>
  )
}

export default Orders
