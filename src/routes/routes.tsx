import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import CreateProduct from "../pages/CreateProduct";
import EditProduct from "../pages/EditProduct";
import Home from "../pages/Home";
import ManageProducts from "../pages/ManageProducts";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/dashboard",
        element: <h1 className="text-center text-3xl mt-10">Dashboard</h1>,
      },
      {
        path: "/dashboard/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/dashboard/create-product",
        element: <CreateProduct />,
      },
      { path: "/dashboard/edit-product/:id", element: <EditProduct /> },
    ],
  },
]);
