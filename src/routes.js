import Homepage from "./pages/Homepage.pages";
import NotFound from "./pages/NotFoundPage";

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
];
