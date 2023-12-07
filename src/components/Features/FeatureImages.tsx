import image_1 from "../../assets/images/feature-image-1.jpg";
import image_2 from "../../assets/images/feature-image-2.jpg";
import image_3 from "../../assets/images/feature-image-3.jpg";

const ImageContainer = ({ src }: { src: string }) => {
  return (
    <img src={src} alt="feature-img" className="h-full w-full object-cover" />
  );
};

const FeatureImages = () => {
  return (
    <div className="w-full max-w-lg flex rounded-[1.25rem] overflow-hidden relative">
      <div className="flex flex-col w-[56.25%] z-10">
        <ImageContainer src={image_1} />
        <ImageContainer src={image_2} />
      </div>
      <div></div>
      <div className="absolute translate-x-[25%] h-full ">
        <ImageContainer src={image_3} />
      </div>
    </div>
  );
};

export default FeatureImages;
