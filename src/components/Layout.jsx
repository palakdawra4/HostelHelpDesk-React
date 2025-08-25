import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import React from 'react'

function Layout() {
  return (
   <>
    <Header role="admin"/>
    <div className='flex'>
        <div className='w-1/5 min-h-screen  '><Sidebar/></div>
        <div className='w-4/5'> 
        <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Layout