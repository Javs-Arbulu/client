import { type RouteObject } from "react-router-dom";
import AboutPage from "../components/pages/about";
import JovenesPage from "../components/pages/ministerios/JovenesPage";
import NinosPage from "../components/pages/ministerios/NinosPage";
import MatrimoniosPage from "../components/pages/ministerios/MatrimoniosPage";
import EventosPage from "../components/pages/EventosPage";
import ContactoPage from "../components/pages/ContactoPage";
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
    path: ROUTES.JOVENES,
    element: <JovenesPage />,
  },
  {
    path: ROUTES.NINOS,
    element: <NinosPage />,
  },
  {
    path: ROUTES.MATRIMONIOS,
    element: <MatrimoniosPage />,
  },
  {
    path: ROUTES.EVENTOS,
    element: <EventosPage />,
  },
  {
    path: ROUTES.CONTACTO,
    element: <ContactoPage />,
  },
];
