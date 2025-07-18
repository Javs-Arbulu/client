const ContactoPage = () => {
  return (
    <section id="contacto" className="py-20 px-4 bg-purple-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-lg">
          ¿Tienes preguntas o quieres más información? No dudes en contactarnos.
          Estamos aquí para ayudarte en tu caminar espiritual.
        </p>
        <div className="mt-6">
          <p className="text-gray-600">📧 Email: info@nuevacasa.com</p>
          <p className="text-gray-600">📞 Teléfono: +1 (555) 123-4567</p>
          <p className="text-gray-600">📍 Dirección: Calle Principal 123</p>
        </div>
      </div>
    </section>
  );
};

export default ContactoPage;
