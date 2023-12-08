import logo from "../../assets/logo_footer.svg";
import madeInIndia from "../../assets/made-in-india.png";
import "./Footer.css";
import SocialLinkedin from "../../assets/social-icons/social-linkedIn.svg";
// import SocialInstagram from "../../assets/social-icons/social-instagram.svg";
import SocialTwitter from "../../assets/social-icons/social-twitter.svg";
import SocialWellfound from "../../assets/social-icons/social-wellfound.svg";

const Footer = () => {
  return (
    <div className="p-5 pb-9 bg-[#035e5d] text-white flex flex-col items-center">
      <div className="flex flex-col gap-4 lg:w-[40rem] ">
        <img src={logo} alt="unmaze-logo" className="w-40" />
        <div className="flex justify-between ">
          <p className="leading-5 tracking-[0.1rem] avenir-font lg:w-[20rem]">
            Unmaze is the financial co-pilot you deserve. Invest smarter, save
            more, and achieve your financial goals faster
          </p>
          <div className="w-[5.625rem] shrink-0">
            <img
              src={madeInIndia}
              alt="made-in-India"
              className="w-full h-full  lg:mr-12"
            />
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-clash-display text-[#fff000] text-xl leading-6 tracking-[0.15rem] font-medium">
              About Us
            </p>
            <div className="flex flex-col gap-2 font-avenir-next ">
              <a
                href="#home"
                className="text-[0.875rem] leading-[1.125] tracking-[0.035rem]"
              >
                Home
              </a>
              <a
                href="#resources"
                className="text-[0.875rem] leading-[1.125] tracking-[0.035rem]"
              >
                Resources
              </a>
              <a
                href="#careers"
                className="text-[0.875rem] leading-[1.125] tracking-[0.035rem]"
              >
                Careers
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-clash-display text-[#fff000] text-xl leading-6 tracking-[0.15rem] font-medium">
              Contact Us
            </p>
            <div className="flex flex-col gap-3 font-avenir-next ">
              <a
                href="mailto:corporate@unmaze.app"
                className="text-[0.875rem] leading-[1.125rem] tracking-[0.035rem]"
              >
                corporate@unmaze.app
              </a>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/unmaze-app/about/">
                  <img src={SocialLinkedin} alt="linkedin-icon" />
                </a>
                {/* <a href="/">
                  <img src={SocialInstagram} alt="" />
                </a> */}
                <a href="https://twitter.com/UnmazeApp">
                  <img src={SocialTwitter} alt="twitter-icon" />
                </a>
                <a href="https://wellfound.com/company/unmaze-app">
                  <img src={SocialWellfound} alt="wellfound-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <p className="font-avenir-next text-[0.75rem] leading-[1.rem] tracking-[0.03rem]">
        Copyright © 2023 Unmaze.app | All rights reserved
      </p>
    </div>
  );
};

export default Footer;
