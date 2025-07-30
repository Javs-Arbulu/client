import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes.constants";
import { DarkModeToggleCompact } from "@/components/ui/DarkModeToggle";
import { AnimatedButton } from "../ui/animatedButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 navbar-style shadow-lg">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link to={ROUTES.HOME} className="flex items-center space-x-3">
          <div className="w-12 h-12 border border-adaptive bg-dark rounded-xl flex items-center justify-center shadow-lg">
            <img
              src="/images/logo-claro-navbar.png"
              alt="Logo"
              className="w-8 h-8"
            />
          </div>
          <div>
            <span className="text-2xl font-black text-brand">Nueva Casa</span>
            <div className="text-xs text-primary-color font-semibold">
              IGLESIA
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#inicio"
            className="text-primary-adaptive hover:text-primary-color font-semibold transition-all hover:scale-105"
          >
            Inicio
          </a>
          <Link
            to={ROUTES.ABOUT}
            className="text-primary-adaptive hover:text-primary-color font-semibold transition-all hover:scale-105"
          >
            Nosotros
          </Link>
          <a
            href="#servicios"
            className="text-primary-adaptive hover:text-primary-color font-semibold transition-all hover:scale-105"
          >
            Servicios
          </a>
          <a
            href="#conecta"
            className="text-primary-adaptive hover:text-primary-color font-semibold transition-all hover:scale-105"
          >
            Conecta
          </a>
          <Link
            to={ROUTES.CONTACTO}
            className="text-primary-adaptive hover:text-primary-color font-semibold transition-all hover:scale-105"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <DarkModeToggleCompact />
          <AnimatedButton className="btn-primary font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Sparkles className="w-4 h-4 mr-2" />
            Visítanos
          </AnimatedButton>
        </div>
      </div>
    </header>
  );
}
