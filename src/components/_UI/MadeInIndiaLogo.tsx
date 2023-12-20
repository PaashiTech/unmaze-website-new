import flagMobile from "../../assets/flag/flag-mobile.svg";

const MadeInIndiaLogo = () => {
  return (
    <div className="flex flex-col items-center px-3 py-[0.625rem] font-font-body ">
      <p className="text-[0.875rem] leading-[0.625rem] tracking-[0.035rem] ">
        MADE IN
      </p>
      <p className="text-[1.5rem] font-semibold leading-[1.875rem] tracking-[0.06rem] ">
        INDIA
      </p>
      <img src={flagMobile} alt="indian-flag" />
      <p className="text-[0.625rem] leading-[1.25rem] tracking-[0.025rem] ">
        FOR INDIA
      </p>
    </div>
  );
};

export default MadeInIndiaLogo;
