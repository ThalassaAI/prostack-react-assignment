import { createBrowserRouter } from "react-router";
import App from "../App";
import { HomePage, ErrorBoundaryPage, NotFoundPage } from "../pages";
import { ProductsPage } from "../assignments/01-product-list-rendering/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundaryPage />,
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
