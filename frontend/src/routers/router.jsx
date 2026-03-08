import { createBrowserRouter } from "react-router-dom";

import App from "../App";

// Pages
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import OrderPage from "../pages/books/OrderPage";
import SearchPage from "../pages/books/SearchPage";

// Admin
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/Dashboard_layout";
import Dashboard from "../pages/dashboard/dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/editBook/UpdateBook";

// Route Protection
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "order",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },

      { path: "about", element: <div>About Page</div> },

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      {
        path: "cart",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },

      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },

      { path: "search", element: <SearchPage /> },
      { path: "books/:id", element: <SingleBook /> },
    ],
  },

  // Admin Login (Public)
  {
    path: "/admin",
    element: <AdminLogin />,
  },

  // Admin Dashboard (Protected)
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },

      {
        path: "add-new-book",
        element: <AddBook />,
      },

      {
        path: "edit-book/:id",
        element: <UpdateBook />,
      },

      {
        path: "manage-books",
        element: <ManageBooks />,
      },
    ],
  },
]);

export default router;