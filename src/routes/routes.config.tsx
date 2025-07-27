import { type RouteObject } from "react-router-dom";
import AboutPage from "../components/pages/about";
import ContactoPage from "../components/pages/ContactoPage";
import ColorSystemDemo from "../components/demo/ColorSystemDemo";
import { ROUTES } from "./routes.constants";
import Home from "../components/pages";

export const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.ABOUT,
    element: <AboutPage />,
  },
  {
    path: ROUTES.CONTACTO,
    element: <ContactoPage />,
  },
  {
    path: ROUTES.COLOR_DEMO,
    element: <ColorSystemDemo />,
  },
];
