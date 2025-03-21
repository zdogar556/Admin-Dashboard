import { Table, Typography,Space, Avatar } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getCustomer,  } from '../../../API';

const Customer = () => {
  const [loading, setLoading]= useState(false);
  const [dataSource, setDataSource]=useState([]);
  

  useEffect(()=>{
    setLoading(true)
    getCustomer().then(res=>{
      setDataSource(res.users)
      setLoading(false)
    })
    
  },[])

  return (
    <Space size={20} direction='vertical'>
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table 
      loading={loading}
      columns={[
        {
          title:"Photo",
          dataIndex:"image",
          render:(link)=>{
            return <Avatar src={link}/>
          }
        },
        {
        title:"FirstName",
        dataIndex:"firstName"
      },
      {
        title:"LastName",
        dataIndex:"lastName",
        

      },
      {
        title:"Email",
        dataIndex:"email",
      },
      {
        title:"Phone",
        dataIndex:"phone"
      },
      {
        title:"Address",
        dataIndex:"address",
        render:(address)=>{
          return <span>{address.address},{address.city}</span>
        }
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

export default Customer
