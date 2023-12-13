import logo from "../../assets/unmaze-logo-light.svg";
import "./Footer.css";
import linkedinMobile from "../../assets/social-icons/linkedIn-mobile.png";
import linkedinDesktop from "../../assets/social-icons/linkedIn-desktop.png";
import instagramMobile from "../../assets/social-icons/instagram-mobile.png";
import instagramDesktop from "../../assets/social-icons/instagram-desktop.png";
import twitterMobile from "../../assets/social-icons//twitter-mobile.png";
import twitterDesktop from "../../assets/social-icons/twitter-desktop.png";
import wellfoundMobile from "../../assets/social-icons/wellfound-mobile.png";
import wellfoundDesktop from "../../assets/social-icons/wellfound-desktop.png";

import flagDesktop from "../../assets/flag/flag-desktop.svg";
import flagMobile from "../../assets/flag/flag-mobile.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-primary-green p-5 pb-9 text-content-white lg:px-[5.625rem] lg:py-16">
      <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-6">
        <div className="flex w-full flex-col gap-4 lg:mr-12">
          <img src={logo} alt="unmaze-logo" className="w-40 lg:w-[15rem]" />
          <div className="flex justify-between lg:flex-col lg:gap-6">
            <p className="avenir-font leading-5 tracking-[0.1rem] lg:text-2xl">
              Unmaze is the financial co-pilot you deserve. Invest smarter, save
              more, and achieve your financial goals faster
            </p>

            <div className="self-start">
              <div className="font-font-body flex flex-col items-center px-3 py-[0.625rem] ">
                <p className="text-[0.875rem] leading-[0.625rem] tracking-[0.035rem] lg:text-[1.17rem] lg:leading-[0.8rem] lg:tracking-[0.05rem]">
                  MADE IN
                </p>
                <p className="text-[1.5rem] font-semibold leading-[1.875rem] tracking-[0.06rem] lg:text-[2rem] lg:leading-[2.5rem] lg:tracking-[0.08rem]">
                  INDIA
                </p>
                <img src={flagMobile} alt="indian-flag" className="lg:hidden" />
                <img
                  src={flagDesktop}
                  alt="indian-flag"
                  className="hidden lg:block"
                />
                <p className="text-[0.625rem] leading-[1.25rem] tracking-[0.025rem] lg:text-[0.833rem] lg:leading-[1.7rem] lg:tracking-[0.033rem]">
                  FOR INDIA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between lg:w-full lg:justify-start lg:gap-20">
          <div className="flex flex-col gap-3 lg:gap-6">
            <p className="font-font-heading text-xl font-medium leading-6 tracking-[0.15rem] text-[#fff000] lg:text-[2rem]">
              About Us
            </p>
            <div className="font-font-body flex flex-col gap-2 text-[0.875rem] lg:gap-3 lg:text-lg">
              <a href="#home" className=" leading-[1.125] tracking-[0.035rem] ">
                Home
              </a>
              <a
                href="#resources"
                className=" leading-[1.125] tracking-[0.035rem]"
              >
                Resources
              </a>
              <a
                href="#careers"
                className=" leading-[1.125] tracking-[0.035rem]"
              >
                Careers
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:gap-6">
            <p className="font-font-heading text-xl font-medium leading-6 tracking-[0.15rem] text-[#fff000] lg:text-[2rem]">
              Contact Us
            </p>
            <div className="font-font-body flex flex-col gap-3 lg:gap-4">
              <a
                href="mailto:corporate@unmaze.app"
                className="text-[0.875rem] leading-[1.125rem] tracking-[0.035rem] lg:text-xl"
              >
                corporate@unmaze.app
              </a>
              <div className="flex gap-3 lg:gap-6">
                <a
                  href="https://www.linkedin.com/company/unmaze-app/about/"
                  target="_blank"
                >
                  <img
                    src={linkedinMobile}
                    alt="linkedin-icon"
                    className="lg:hidden"
                  />
                  <img
                    src={linkedinDesktop}
                    alt="linkedin-icon"
                    className="hidden lg:block"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/unmaze-app/about/"
                  target="_blank"
                >
                  <img
                    src={instagramMobile}
                    alt="linkedin-icon"
                    className="lg:hidden"
                  />
                  <img
                    src={instagramDesktop}
                    alt="linkedin-icon"
                    className="hidden lg:block"
                  />
                </a>
                <a href="https://twitter.com/UnmazeApp" target="_blank">
                  <img
                    src={twitterMobile}
                    alt="linkedin-icon"
                    className="lg:hidden"
                  />
                  <img
                    src={twitterDesktop}
                    alt="linkedin-icon"
                    className="hidden lg:block"
                  />
                </a>
                <a
                  href="https://wellfound.com/company/unmaze-app"
                  target="_blank"
                >
                  <img
                    src={wellfoundMobile}
                    alt="linkedin-icon"
                    className="lg:hidden"
                  />
                  <img
                    src={wellfoundDesktop}
                    alt="linkedin-icon"
                    className="hidden lg:block"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 w-full lg:my-12" />
      <p className="font-font-body text-[0.75rem] leading-[1.rem] tracking-[0.03rem] lg:text-base lg:tracking-[0.04rem]">
        Copyright © 2023 Unmaze.app | All rights reserved
      </p>
    </div>
  );
};

export default Footer;
