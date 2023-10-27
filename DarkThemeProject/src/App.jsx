import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./Layout/Root"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/about",
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
