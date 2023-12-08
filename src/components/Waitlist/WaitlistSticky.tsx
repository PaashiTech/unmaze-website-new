import Heading from "../Typography/Heading";
import Signup from "./Signup";
import "./Waitlist.css";

type WaitlistStickyProps = {
  type: "first" | "second";
  isScrollView?: boolean;
};

const WaitlistSticky: React.FC<WaitlistStickyProps> = ({ type }) => {
  return (
    <div
      className={`waitlist-${type} w-full flex flex-col px-5 py-8 items-center gap-4 absolute bottom-0 z-20 lg:py-4`}
    >
      <div className="flex flex-col gap-6 lg:gap-3 items-center w-full">
        <Heading
          as="h2"
          className="text-white font-clash-display text-2xl font-semibold leading-6 tracking-[0.06rem]"
        >
          <span className="join">Join</span> the waitlist
        </Heading>
        <Signup />
      </div>
    </div>
  );
};

export default WaitlistSticky;
