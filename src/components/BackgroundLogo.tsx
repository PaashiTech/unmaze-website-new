import backgroundLogo from "../assets/background-logo.svg";
const BackgroundLogo = () => {
  return (
    <div className="absolute w-[42rem] h-[42rem] top-[-3.5rem] left-[-1.5rem]">
      <img
        src={backgroundLogo}
        alt="background-logo"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default BackgroundLogo;
