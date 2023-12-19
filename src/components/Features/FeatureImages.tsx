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
    <div className="relative flex w-full max-w-lg overflow-hidden rounded-[1.25rem] lg:order-2">
      <div className="z-10 flex w-[56.25%] flex-col">
        <ImageContainer src={image_1} />
        <ImageContainer src={image_2} />
      </div>
      <div></div>
      <div className="absolute h-full translate-x-[25%] ">
        <ImageContainer src={image_3} />
      </div>
    </div>
  );
};

export default FeatureImages;
