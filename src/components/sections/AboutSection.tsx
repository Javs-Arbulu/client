export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/nosotros.jpg"
          alt="Sobre nosotros"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Quiénes somos
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Somos una comunidad cristiana apasionada por llevar el mensaje de
            esperanza, amor y fe a cada persona. Creemos en el poder
            transformador de una relación con Dios.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Conéctate con nosotros
          </button>
        </div>
      </div>
    </section>
  );
}
