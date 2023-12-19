import backgroundLogo from "../../assets/background-logo.svg";
const BackgroundLogo = () => {
  return (
    <div className="absolute right-[-12rem] top-[3rem] w-[31rem] lg:left-0 lg:right-0 lg:mx-auto lg:w-[37.5rem]">
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
