import frontPageImage from "../../../assets/forntPage.jpg";
import ADNWords from "./sections/ADNWords";

// En tu componente o página

const MainSection = () => {
  return (
    <>
      {/* <div className="w-full">
        <img
          src={frontPageImage}
          alt="Logo"
          className="w-full h-auto object-cover"
        />
      </div> */}
      <section className="py-3 px-3  dark:bg-white">
        <ADNWords />
      </section>
    </>
  );
};

export default MainSection;
