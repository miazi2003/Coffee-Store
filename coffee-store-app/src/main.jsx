import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayOut from "./layouts/MainLayOut.jsx";
import Home from "./Pages/Home.jsx";
import AddCoffee from "./Component/AddCoffee.jsx";
import UpdateCoffee from "./Component/UpdateCoffee.jsx";
import ViewCoffeeDetails from "./Component/ViewCoffeeDetails.jsx";

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
        path: '/updateCoffee/:id' ,
        Component: UpdateCoffee,
        loader: ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      {
        path: '/viewCoffee/:id' ,
        Component: ViewCoffeeDetails,
        loader: ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
      }
     ]
 }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
