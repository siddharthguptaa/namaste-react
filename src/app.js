import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
//import About from "./Components/About/About";
import Contact from "./Components/ContactUs/Contact";
import Error from "./Components/Error/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenu from "./Components/Common/ResturantMenu";
import UserContext from "./Utils/Context/UserContext";

const Grocery = lazy(() => import("./Components/Grocery/Grocery"));
const About = lazy(() => import("./Components/About/About"));



const AppLayout = () => {
  const [userName, setUserName] = useState("Siddharth Gupta");
  return (
    <UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery></Grocery>
          </Suspense>
        ),
      },
      {
        path: "/resturants/:resId",
        element: <ResturantMenu></ResturantMenu>,
      },
    ],
    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
