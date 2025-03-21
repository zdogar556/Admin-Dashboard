import React from 'react'
import { Badge, Drawer, Image, List, Space, Typography } from 'antd'
import { BellFilled, BellOutlined, MailOutlined } from '@ant-design/icons'
import { use } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getComments, getOrder } from '../../API'

const AppHeader = () => {
  const [comments, setComments]= useState([]);
  const [order, setOrder]= useState([]);
  const [commentsOpen, setCommentsOpen]= useState(false);
  const [notificationOpen,setNotificationOpen]= useState(false);


  useEffect(() => {
    getComments().then(res=>{
      setComments(res.comments)
    });
    getOrder().then(res=>{
      setOrder(res.products)
    });
  }, [])



  return (
    <div className='AppHeader'>
      <Image width={40}
       height={40}
       scrc='./src/Componet/image/admindash.jpg'></Image>
       <Typography.Title>Admin Dashboard</Typography.Title>
       <Space>
        <Badge count={comments.length} dot >
        <MailOutlined style={{ fontSize: 24}} onClick={()=>{
          setCommentsOpen(true)
        }} />
        </Badge>
        <Badge count={order.length }>
        <BellFilled style={{ fontSize: 24}} onClick={()=>{
          setNotificationOpen(true)
        }}/>
        </Badge>
       </Space>
       <Drawer title="Comments" open={commentsOpen} onClose={() => {setCommentsOpen(false)}} 
        maskClosable>
          <List dataSource={comments} renderItem={(item)=>{
            return <List.Item>{item.body}</List.Item>
          }} ></List>
           </Drawer>
        <Drawer title="Notifications" open={notificationOpen} onClose={() => {setNotificationOpen(false)}} 
        maskClosable> 
        <List dataSource={order} renderItem={(item)=>{
            return <List.Item>{item.title}</List.Item>
          }} ></List>
        </Drawer>
    </div>
  )
}

export default AppHeader
