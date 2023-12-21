import backgroundLogo from "../../assets/background-logo.svg";
const BackgroundLogo = () => {
  return (
    <div className="absolute right-[-12rem] top-[3rem] w-[31rem] lg:bottom-0 lg:right-[-3rem] lg:top-0 lg:my-auto lg:h-fit lg:w-[37.5rem]">
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
