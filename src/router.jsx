import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRouter from "./components/PrivateRoute";
import Register from "./components/Register";
import ForgetPassword from "./components/ForgetPassword";
import Profile from "./components/Profile";
import MainRoutes from "./components/MainRoutes";
import MyEquipment from "./components/MyEquipment";
import AddEquipment from "./components/AddEquipment";
import AllEquipments from "./components/AllEquipments";
import NotFound from "./components/NotFound";
import UpdateProduct from "./components/UpdateProduct"
import ProductDetails from "./components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/product`)
      },
      {
        path: "all-equipments",
        element: <AllEquipments />
      },
      {
        path: "my-equipment",
        element: <PrivateRouter> <MyEquipment /> </PrivateRouter>
      },
      {
        path: "update-equipment/:id",
        element: <PrivateRouter> <UpdateProduct /></PrivateRouter>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/${params.id}`)
      },
      {
        path: "details-equipment/:id",
        element: <PrivateRouter> <ProductDetails /></PrivateRouter>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/${params.id}`)
      },
      {
        path: "add-equipment",
        element: <PrivateRouter> <AddEquipment /> </PrivateRouter>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/forgot-password",
        element: <ForgetPassword />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;