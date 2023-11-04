import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./Layout/Root"
import Home from "./Pages/Home"
import Doctors from "./Pages/Doctors"
import DoctorProfile from "./Pages/DoctorProfile"
import About from "./Pages/About"


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
         {
          path:"/",
          element:<Home/>
         },
         {
          path:"/doctors",
          element:<Doctors/>
         },
         {
          path:"/profile",
          element:<DoctorProfile/>
         },
         {
          path:"about",
          element:<About/>
         }
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
