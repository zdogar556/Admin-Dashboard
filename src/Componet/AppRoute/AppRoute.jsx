import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Inventory from '../Pages/Inventory/Inventory'
import Customer from '../Pages/Customer/Customer'
import Orders from '../Pages/Order/Orders'

const AppRoute = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Dashboard/>} > </Route>
        <Route path='/inventory' element={<Inventory/>}> </Route>
        <Route path='/orders' element={<Orders/>} ></Route>
        <Route path='/customers' element={<Customer/> }></Route>
      </Routes>
    
    </div>
  )
}

export default AppRoute
