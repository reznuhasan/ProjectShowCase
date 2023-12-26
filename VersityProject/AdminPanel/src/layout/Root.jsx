import { Outlet } from 'react-router-dom'
import DashBoardHeader from '../pages/DashBoardHeader'
import DashBoardSidebar from '../pages/DashBoardSidebar'
import StudentDataProvider, { StudentContext } from '../ContextHook/StudentDataProvider'

const Root = () => {
  return (
    <div>
      <StudentDataProvider>
        <DashBoardHeader />
        <div style={{
          display: "flex"
        }}>
          <DashBoardSidebar />
          <Outlet />

        </div>
      </StudentDataProvider>

    </div>
  )
}

export default Root