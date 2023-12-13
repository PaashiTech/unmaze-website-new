import Heading from "../UI/Typography/Heading";
import Signup from "./Signup";

type WaitlistStickyProps = {
  type: "first" | "second";

  isWaitListVisible?: boolean;
};

const WaitlistSticky: React.FC<WaitlistStickyProps> = ({ type }) => {
  const waitlistBg =
    type === "first" ? "bg-gradient-unmaze-3" : "bg-primary-green";

  return (
    <div
      className={`${waitlistBg} sticky bottom-0 z-20 flex w-full flex-col items-center gap-4 px-5 py-8 lg:hidden lg:py-4`}
    >
      <div className="flex w-full flex-col items-center gap-6 lg:gap-3">
        <Heading
          as="h2"
          className="font-font-heading text-2xl font-semibold leading-6 tracking-[0.06rem] text-white"
        >
          <span className="bg-gradient-unmaze-4 bg-clip-text text-transparent">
            Join
          </span>{" "}
          the waitlist
        </Heading>
        <Signup />
      </div>
    </div>
  );
};

export default WaitlistSticky;
