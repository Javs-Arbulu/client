import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes.constants";
import { DarkModeToggleCompact } from "@/components/ui/DarkModeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-nc-accent-900/95 backdrop-blur-2xl border-b border-slate-200/60 dark:border-nc-accent-700/60 shadow-lg shadow-slate-900/5 dark:shadow-nc-accent-950/20">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link to={ROUTES.HOME} className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-nc-accent-800 to-nc-accent-700 dark:from-nc-primary-500 dark:to-nc-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-2xl font-black bg-gradient-to-r from-nc-accent-800 to-nc-accent-600 dark:from-nc-primary-300 dark:to-nc-secondary-300 bg-clip-text text-transparent">
              Nueva Casa
            </span>
            <div className="text-xs text-nc-primary-500 dark:text-nc-primary-400 font-semibold">
              IGLESIA
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#inicio"
            className="text-nc-accent-700 dark:text-nc-primary-200 hover:text-nc-accent-900 dark:hover:text-nc-primary-100 font-semibold transition-all hover:scale-105"
          >
            Inicio
          </a>
          <Link
            to={ROUTES.ABOUT}
            className="text-nc-accent-700 dark:text-nc-primary-200 hover:text-nc-accent-900 dark:hover:text-nc-primary-100 font-semibold transition-all hover:scale-105"
          >
            Nosotros
          </Link>
          <a
            href="#servicios"
            className="text-nc-accent-700 dark:text-nc-primary-200 hover:text-nc-accent-900 dark:hover:text-nc-primary-100 font-semibold transition-all hover:scale-105"
          >
            Servicios
          </a>
          <a
            href="#conecta"
            className="text-nc-accent-700 dark:text-nc-primary-200 hover:text-nc-accent-900 dark:hover:text-nc-primary-100 font-semibold transition-all hover:scale-105"
          >
            Conecta
          </a>
          <Link
            to={ROUTES.CONTACTO}
            className="text-nc-accent-700 dark:text-nc-primary-200 hover:text-nc-accent-900 dark:hover:text-nc-primary-100 font-semibold transition-all hover:scale-105"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <DarkModeToggleCompact />
          <Button className="bg-gradient-to-r from-nc-primary-400 to-nc-secondary-500 hover:from-nc-primary-500 hover:to-nc-secondary-600 text-white dark:text-nc-accent-900 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Sparkles className="w-4 h-4 mr-2" />
            Visítanos
          </Button>
        </div>
      </div>
    </header>
  );
}
