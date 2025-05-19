import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayOut from "./layouts/MainLayOut.jsx";
import Home from "./Pages/Home.jsx";
import AddCoffee from "./Component/AddCoffee.jsx";
import UpdateCoffee from "./Component/UpdateCoffee.jsx";

const router = createBrowserRouter([
  { path: "/",
     Component: MainLayOut,
     children:[
      {index:true , Component:Home,
        loader: ()=>fetch('http://localhost:3000/coffees'),
      },
      {path: '/addCoffee',
        Component: AddCoffee
      },
      {
        path: '/update' ,
        Component: UpdateCoffee
      }
     ]
 }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
