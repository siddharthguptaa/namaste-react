import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
import Contact from "./Components/ContactUs/Contact";
import Error from "./Components/Error/Error"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import ResturantMenu from "./Components/Common/ResturantMenu";



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element:<Body></Body>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path:"/resturants/:resId",
        element: <ResturantMenu></ResturantMenu>
      }
    ],
    errorElement: <Error></Error>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
