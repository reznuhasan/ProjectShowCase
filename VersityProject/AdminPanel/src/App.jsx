import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Root from "./layout/Root"
import DashboardHome from "./pages/DashboardHome"
import AdminRole from "./pages/AdminRole"
import AssignAdmin from "./components/AssignAdmin"
import Department from "./pages/AddDepartment"
import AddDepartment from "./pages/AddDepartment"
import AddCourse from "./pages/AddCourse"
import ShowDepartments from "./pages/ShowDepartments"
import ShowCourses from "./pages/ShowCourses"
import AddSemester from "./pages/AddSemester"



function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login />
    },
    { 
      path:"/dashboard",
      element:<Root/>,
      children:[
       {
        path:"",
        element:<DashboardHome/>
       },
       {
        path:"admin",
        element:<AdminRole/>
       },
       {
        path:"department/add",
        element:<AddDepartment/>
       },
       {
        path:"course/add",
        element:<AddCourse/>
       },
       {
        path:"department",
        element:<ShowDepartments/>
       },
       {
        path:"course",
        element:<ShowCourses/>
       },
       {
        path:"semester",
        element:<AddSemester/>
       }
      ]
    },

  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
