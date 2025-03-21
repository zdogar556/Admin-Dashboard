import React from 'react'
import { Typography } from 'antd'
const AppFooter = () => {
  return (
    <div className='AppFooter'>
      <Typography.Link  href="tel:0568954">+0568954</Typography.Link> 
      <Typography.Link  href="https://www.google.com">Privacy Policy</Typography.Link>
      <Typography.Link  href="https://www.google.com">Terms & Conditions</Typography.Link>
    </div>
  )
}

export default AppFooter
