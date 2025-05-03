import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import { ProductsPage } from "../assignments/01-product-list-rendering/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "assignment1",
        element: <div>Assignment 1</div>,
      },
      {
        path: "products-grid",
        element: <ProductsPage type="grid" />,
      },
      {
        path: "products-table",
        element: <ProductsPage type="table" />,
      },
    ],
  },
]);

export default router;
