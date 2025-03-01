import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css"

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/layout/CountryDetails";

const router = createBrowserRouter([  
  {
     path:"/",
     element:<AppLayout />,
     errorElement:<ErrorPage/>,
     children:[
        {
          path:"/",
          element: <Home/>,
        },
      
        {
          path:"about",
          element: <About/>,
        },
      
        {
          path:"country",
          element: <Country/>,
        },

        {
          path:"country/:id",
          element: <CountryDetails/>
        },
      
        {
          path:"contact",
          element: <Contact/>,
        },
       ]
  },

  
 
] );

const App = () => {
  return <RouterProvider router={router}/> 
}

export default App;