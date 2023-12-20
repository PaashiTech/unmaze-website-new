import starTealDesktop from "../../assets/stars/star-teal-desktop.svg";
import starTealMobile from "../../assets/stars/star-teal-mobile.svg";

const StarIcon = () => {
  return (
    <span className="inline-block">
      <picture>
        <source srcSet={starTealDesktop} media="(min-width: 1024px)" />
        <img src={starTealMobile} alt="star-icon-mobile" />
      </picture>
    </span>
  );
};

export default StarIcon;
