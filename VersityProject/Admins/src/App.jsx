import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Root from "./layout/Root"
import DashboardHome from "./pages/DashboardHome"
import AdminRole from "./pages/AdminRole"
import AssignAdmin from "./components/AssignAdmin"
import Department from "./pages/Department"



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
        path:"department",
        element:<Department/>
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
