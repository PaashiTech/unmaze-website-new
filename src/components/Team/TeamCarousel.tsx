import Slider from "react-slick";
import MemberCard from "./MemberCard";
import { memberData } from "./memberData";
import prevArrow from "../../assets/carousel-arrows/arrow-back.svg";
import nextArrow from "../../assets/carousel-arrows/arrow-next.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useResponsive } from "../hooks/useResponsive";
import "./TeamCarousel.css";

const NextArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className="hidden md:block">
      <img src={nextArrow} alt="next-arrow" />
    </button>
  );
};

const PrevArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className="hidden md:block">
      <img src={prevArrow} alt="next-arrow" />
    </button>
  );
};

const TeamCarousel = () => {
  const { screenType } = useResponsive();
  const settings = {
    dots: true,
    className: "center",
    infinite: false,
    centerPadding: "60px",
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: screenType === "MOBILE" ? 1 : screenType === "TABLET" ? 2 : 4,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          backgroundColor: "transparent",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => <div className=""></div>,
  };

  return (
    <div className="w-full lg:px-[1rem]">
      <Slider {...settings} className="hidden lg:flex">
        {memberData.flat().map((member) => {
          return (
            <MemberCard
              key={member.id}
              bio={member.bio}
              image={member.image}
              name={member.name}
              reverse={member.reverse}
            />
          );
        })}
      </Slider>
      <Slider {...settings} className="flex lg:hidden">
        {memberData.map((memberPair) => {
          return (
            <div className="!flex flex-col gap-8 py-8">
              {memberPair.map((member) => (
                <MemberCard
                  key={member.id}
                  bio={member.bio}
                  image={member.image}
                  name={member.name}
                  reverse={member.reverse}
                />
              ))}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TeamCarousel;
