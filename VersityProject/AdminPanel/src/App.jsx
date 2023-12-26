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
import TeacherRegister from "./pages/TeacherRegister"
import StudentRegister from "./layout/StudentRegister"
import PersonalInfo from "./pages/StudentPersonalInfo"
import StudentPersonalInfo from "./pages/StudentPersonalInfo"
import StudentParentInfo from "./pages/StudentParentInfo"



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
       },
       {
        path:"teacher/register",
        element:<TeacherRegister/>
       },
       {
        path:"student/register",
        element:<StudentRegister/>,
        children:[
        {
           path:"",
           element:<StudentPersonalInfo/>
        },
        {
          path:"family-info",
          element:<StudentParentInfo/>
        }
      ]
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
