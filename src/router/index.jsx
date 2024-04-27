import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/homepage/Homepage";
import Bakery from "../components/categories/Bakery";
import ChickenEgg from "../components/categories/ChickenEgg";
import Fruits from "../components/categories/Fruits";
import Grains from "../components/categories/Grains";
import Juice from "../components/categories/Juice";
import PersonalCare from "../components/categories/PersonalCare";
import Vegetables from "../components/categories/Vegetables";
import Checkout from "../components/checkout/Checkout";
import SignUp from "../components/account/SignUp";
import Login from "../components/account/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/fruits",
    element: <Fruits />,
  },
  {
    path: "/vegetables",
    element: <Vegetables />,
  },
  {
    path: "/chicken-egg",
    element: <ChickenEgg />,
  },
  {
    path: "/bakery",
    element: <Bakery />,
  },
  {
    path: "/grains",
    element: <Grains />,
  },
  {
    path: "/milk-juice",
    element: <Juice />,
  },
  {
    path: "/personal-care",
    element: <PersonalCare />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
