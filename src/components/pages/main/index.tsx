import frontPageImage from "../../../assets/forntPage.jpg";
import ADNWords from "./sections/ADNWords";
import { ImageSlider } from "./sections/ImageSlider";

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
      <ImageSlider />
      <ADNWords />
    </>
  );
};

export default MainSection;
