import React from 'react'
import { Outlet } from 'react-router-dom'
import DashBoardHeader from '../components/DashBoardHeader'

const Dashboard = () => {
  return (
    <div>
      <DashBoardHeader/>
      <Outlet/>
    </div>
  )
}

export default Dashboard