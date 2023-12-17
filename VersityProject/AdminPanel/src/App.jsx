import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Root from "./layout/Root"
import DashboardHome from "./pages/DashboardHome"
import AdminReg from "./components/AdminReg"



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
        path:"admin/add",
        element:<AdminReg/>
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
