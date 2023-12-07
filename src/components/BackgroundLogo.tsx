import backgroundLogo from "../assets/background-logo.svg";
const BackgroundLogo = () => {
  return (
    <div className="absolute w-[34rem] h-[34rem]">
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
