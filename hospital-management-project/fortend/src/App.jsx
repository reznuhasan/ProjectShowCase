import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./Layout/Root"
import Home from "./Pages/Home"
import Doctors from "./Pages/Doctors"
import DoctorProfile from "./Pages/DoctorProfile"
import About from "./Pages/About"
import Cabins from "./Pages/Cabins"
import PremiumCabin from "./Pages/PremiumCabin"
import StandardCabin from "./Pages/StandardCabin"
import ICU from "./Pages/ICU"
import OperationCabin from "./Pages/OperationCabin"
import Register from "./components/Register"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/doctors",
          element: <Doctors />
        },
        {
          path: "/doctor-profile",
          element: <DoctorProfile />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "cabins",
          element: <Cabins />,
          children: [
            {
              path: "",
              element: <PremiumCabin />
            },
            {
              path: "standard",
              element: <StandardCabin />
            },
            {
              path: "icu",
              element: <ICU />
            },
            {
              path: "ot",
              element: <OperationCabin />
            }
          ]

        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
