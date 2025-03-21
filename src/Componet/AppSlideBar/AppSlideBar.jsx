import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const AppSlideBar = () => {
  const location=useLocation();
  const [selectedKeys,setSlectedKeys]=useState('/')

  useEffect(() => {
    const pathname=location.pathname;
    setSlectedKeys(pathname);  
  }, [location.pathname]) 

  const navigate = useNavigate();
  return (
    <div className='AppSlideBar'>
    <Menu 
    className='AppSlideBarVertical'
    mode="vertical"
    onClick={(items)=>{
      // itme.key
      navigate(items.key)
    }}
    selectedKeys={[selectedKeys]}
      items={ [ {
        label:"Dashboard",
        icon:<AppstoreOutlined />,
        key:"/",
      },
      {
        label:"Inventory",
        key:"/inventory",
        icon:<ShopOutlined />,
      },
      {
        label:"Orders",
        key:"/orders",
        icon:<ShoppingCartOutlined />,
      },
      {
        label:"Customers",
        key:"/customers",
        icon:<UserOutlined />,
      },
      ]}
    > 
    </Menu>
    </div>
  )
}

export default AppSlideBar
