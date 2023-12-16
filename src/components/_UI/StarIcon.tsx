import starTealDesktop from "../../assets/stars/star-teal-desktop.png";
import starTealMobile from "../../assets/stars/star-teal-mobile.png";

const StarIcon = () => {
  return (
    <span className="inline-block">
      <img src={starTealMobile} alt="star-icon-mobile" className="lg:hidden" />
      <img
        src={starTealDesktop}
        alt="star-icon-desktop"
        className="hidden lg:block"
      />
    </span>
  );
};

export default StarIcon;
