import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetails from "../pages/ItemDetails";
import Category from "../pages/Category";

const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/ItemDetails/:id",
      element: <ItemDetails />,
    },

    {

      path: "/category/:categoryName",
      element: <Category />,
    },

  ]);

  return <RouterProvider router={router} />;
};

export default Navigation;