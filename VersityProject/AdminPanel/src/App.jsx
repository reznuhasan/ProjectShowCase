import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Root from "./layout/Root"


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
