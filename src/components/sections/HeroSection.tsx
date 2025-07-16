export default function HeroSection() {
  return (
    <section
      className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Bienvenido a NombreIglesia
        </h1>
        <p className="text-white text-lg">
          Una comunidad para encontrarse con Dios y crecer juntos
        </p>
      </div>
    </section>
  );
}
