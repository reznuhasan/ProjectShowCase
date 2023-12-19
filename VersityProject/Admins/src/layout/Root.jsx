import { Outlet } from 'react-router-dom'
import DashBoardHeader from '../pages/DashBoardHeader'
import DashBoardSidebar from '../pages/DashBoardSidebar'

const Root = () => {
  return (
    <div>
        <DashBoardHeader/>
        <div style={{
          display:"flex"
        }}>
          <DashBoardSidebar/>
          <Outlet/>

        </div>
    </div>
  )
}

export default Root