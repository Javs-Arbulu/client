export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Nueva Casa. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
