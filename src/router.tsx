import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import ResendEmailCode from "./pages/ResendEmailCode";

// components
import DefaultLayout from "./components/core/DefaultLayout";
import GuestLayout from "./components/core/GuestLayout";

import Bnpl from "./pages/Bnpl";
import BnplPayment from "./pages/BnplPayment";
import ManageAccount from "./pages/ManageAccount";
import Retailers from "./pages/Retailers";
import RetailerPage from "./pages/RetailerPage";
import Gadgets from "./pages/Gadgets";
import GadgetPage from "./pages/GadgetPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/loans",
        element: <Bnpl />,
      },
      {
        path: "/payments",
        element: <BnplPayment />,
      },
      {
        path: "/account",
        element: <ManageAccount />,
      },
      {
        path: "/retailers",
        element: <Retailers />,
      },
      {
        path: "/retailers/:id",
        element: <RetailerPage />,
      },
      {
        path: "/gadgets",
        element: <Gadgets />,
      },
      {
        path: "/gadgets/:id",
        element: <GadgetPage />,
      },

      {
        path: "/change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "/resend-email-code",
        element: <ResendEmailCode />,
      },
    ],
  },
]);

export default router;
