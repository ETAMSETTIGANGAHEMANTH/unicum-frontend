import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
function Rootlayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Rootlayout