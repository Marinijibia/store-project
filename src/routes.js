import { lazy } from "react";
import Homepage from "./pages/Homepage.pages";
import NotFound from "./pages/NotFoundPage";

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
];
