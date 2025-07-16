export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Nueva Casa</h1>
        <ul className="flex gap-6 font-medium text-gray-700">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Eventos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
