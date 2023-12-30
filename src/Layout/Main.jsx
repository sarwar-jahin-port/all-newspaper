import React from 'react'
import { Navbar } from '../pages/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
