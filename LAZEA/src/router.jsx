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
import UpdateProduct from "./components/UpdateProduct";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import Support from "./components/Support";
import AboutUs from "./components/AboutUs";
import Dashboard from "./components/Dashboard";
import DashboardOverview from "./components/DashboardOverview";
import DashboardAllItems from "./components/DashboardAllItems";
import DashboardAddItem from "./components/DashboardAddItem";
import DashboardMyItems from "./components/DashboardMyItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://plant-server-iota.vercel.app/product")
      },
      {
        path: "all-equipments",
        element: <AllEquipments />
      },
      {
        path: "my-equipment",
        element: <PrivateRouter><MyEquipment /></PrivateRouter>
      },
      {
        path: "update-equipment/:id",
        element: <PrivateRouter><UpdateProduct /></PrivateRouter>,
        loader: ({ params }) =>
          fetch(`https://plant-server-iota.vercel.app/product/${params.id}`),
        errorElement: (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl text-red-600">
              Error loading equipment. Please try again later.
            </p>
          </div>
        ),
      },
      {
        path: "details-equipment/:id",
        element: <ProductDetails />,
        loader: ({ params }) => 
          fetch(`https://plant-server-iota.vercel.app/${params.id}`)
      },
      {
        path: "add-equipment",
        element: <PrivateRouter><AddEquipment /></PrivateRouter>
      },
       {
        path:"about-us",
        element: <AboutUs/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"support",
        element: <Support/>
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
        path: "dashboard",
        element: <PrivateRouter><Dashboard /></PrivateRouter>,
        children: [
          { index: true, element: <DashboardOverview /> },
          { path: "all-items", element: <DashboardAllItems /> },
          { path: "add-item", element: <DashboardAddItem /> },
          { path: "my-items", element: <DashboardMyItems /> },
        ]
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;
