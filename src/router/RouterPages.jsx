import { createBrowserRouter } from "react-router-dom"
import App from "../components/pages/App"
import Characters from "../components/pages/Characters"
import Error404 from "../components/pages/Error404"

const RouterPages = createBrowserRouter([
    {
        path: "/",
        element: <App />,   
        errorElement: <Error404/>,
     },
     {
      path: "/characters/:id",
      element: <Characters />
   },


  ])

export default RouterPages