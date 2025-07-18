import frontPageImage from "../../../assets/forntPage.jpg";

// En tu componente o página

const MainSection = () => {
  return (
    <>
      <div className="w-full">
        <img
          src={frontPageImage}
          alt="Logo"
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Bienvenido a Nueva Casa
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mt-4">
            Una comunidad de fe donde todos son bienvenidos
          </p>
        </div>
      </section>
    </>
  );
};

export default MainSection;
