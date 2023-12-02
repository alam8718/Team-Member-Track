import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Fotter from './component/Fotter/Fotter'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
    </>
  )
}

export default Layout