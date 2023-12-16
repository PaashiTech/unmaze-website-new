import flagDesktop from "../../assets/flag/flag-desktop.svg";
import flagMobile from "../../assets/flag/flag-mobile.svg";

const MadeInIndiaLogo = () => {
  return (
    <div className="flex flex-col items-center px-3 py-[0.625rem] font-font-body ">
      <p className="text-[0.875rem] leading-[0.625rem] tracking-[0.035rem] lg:text-[1.17rem] lg:leading-[0.8rem] lg:tracking-[0.05rem]">
        MADE IN
      </p>
      <p className="text-[1.5rem] font-semibold leading-[1.875rem] tracking-[0.06rem] lg:text-[2rem] lg:leading-[2.5rem] lg:tracking-[0.08rem]">
        INDIA
      </p>
      <img src={flagMobile} alt="indian-flag" className="lg:hidden" />
      <img src={flagDesktop} alt="indian-flag" className="hidden lg:block" />
      <p className="text-[0.625rem] leading-[1.25rem] tracking-[0.025rem] lg:text-[0.833rem] lg:leading-[1.7rem] lg:tracking-[0.033rem]">
        FOR INDIA
      </p>
    </div>
  );
};

export default MadeInIndiaLogo;
