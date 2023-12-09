import Heading from "../Typography/Heading";
import Signup from "./Signup";
import "./Waitlist.css";

type WaitlistProps = {
  type: "first" | "second";
};

const Waitlist: React.FC<WaitlistProps> = ({ type }) => {
  return (
    <div
      id="waitlist"
      className={`waitlist-${type} flex flex-col items-center gap-4 px-5 py-8 lg:scroll-m-[95.2px] lg:gap-6 lg:px-[5.625rem] lg:py-[4rem]`}
    >
      <div className="flex w-full flex-col items-center gap-6 lg:gap-10">
        <Heading
          as="h2"
          className="font-clash-display text-2xl font-semibold leading-6 tracking-[0.06rem] text-white lg:text-5xl"
        >
          <span className="join">Join</span> the waitlist
        </Heading>
        <Signup />
      </div>
      <div>
        <p className="text-center font-avenir-next text-lg leading-6 tracking-wider text-white lg:text-[1.75rem] lg:leading-10">
          Be the first to experience
          <br />
          the power of AI in personal finance.
        </p>
      </div>
    </div>
  );
};

export default Waitlist;
