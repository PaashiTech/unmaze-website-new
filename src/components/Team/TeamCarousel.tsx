import MemberCard from "./MemberCard";
import { memberData } from "./memberData";

const TeamCarousel = () => {
  return (
    <div className="w-full carousel">
      {memberData.map((memberPair, i) => {
        return (
          <div id={`item${i + 1}`} className="carousel-item w-full">
            <div className="py-8 flex flex-col gap-8">
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
