import { lazy } from "react";
import Homepage from "./pages/Homepage.pages";
import NotFound from "./pages/NotFoundPage";

export const ALLOWED_CAT = {
  MENS: "men's clothing",
  WOMEN: "women's clothing",
};

const Products = lazy(() => import("./pages/Products"));

export const appRoutes = [
  {
    path: "/",
    component: Homepage,
    requireAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requireAuth: false,
  },
  {
    path: "/product",
    component: Products,
    requireAuth: false,
  },
  {
    path: "/product/:category?",
    component: Products,
    requireAuth: false,
  },
];
