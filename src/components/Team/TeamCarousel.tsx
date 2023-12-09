import MemberCard from "./MemberCard";
import { memberData } from "./memberData";
// import prevArrow from '../../assets/carousel-arrows/arrow-back.svg';
// import nextArrow from '../../assets/carousel-arrows/arrow-next.svg';

const TeamCarousel = () => {
  return (
    <div className="carousel w-full">
      {memberData.map((memberPair, i) => {
        return (
          <div
            id={`item${i + 1}`}
            className="carousel-item w-full justify-center"
          >
            <div className="flex flex-col gap-8 py-8 lg:w-[30rem]">
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
          </div>
        );
      })}
    </div>
  );
};

export default TeamCarousel;
