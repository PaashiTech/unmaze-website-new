import Heading from "../Typography/Heading";
import Text from "../Typography/Text";
import Signup from "./Signup";
import "./Waitlist.css";

type WaitlistProps = {
  type: "first" | "second";
};

const Waitlist: React.FC<WaitlistProps> = ({ type }) => {
  return (
    <div
      className={`waitlist-${type} flex flex-col px-5 py-8 items-center gap-4 `}
    >
      <div className="flex flex-col gap-6 items-center w-full">
        <Heading
          as="h2"
          className="text-white font-clash-display text-2xl font-semibold leading-6 tracking-[0.06rem]"
        >
          <span className="join">Join</span> the waitlist
        </Heading>
        <Signup />
      </div>
      <div>
        <Text
          size="lg"
          className="text-white text-center leading-6 tracking-wider avenir-font"
        >
          Be the first to experience
        </Text>
        <Text
          size="lg"
          className="text-white text-center leading-6 tracking-wider avenir-font"
        >
          the power of AI in personal finance
        </Text>
      </div>
    </div>
  );
};

export default Waitlist;
