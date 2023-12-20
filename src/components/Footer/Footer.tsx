import logo from "../../assets/unmaze-logo-light.svg";
import "./Footer.css";
import Text from "../_UI/Typography/Text";
import MadeInIndiaLogo from "../_UI/MadeInIndiaLogo";
import Heading from "../_UI/Typography/Heading";
import { footerLinks, socialIconLinks } from "./footerData";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-primary-green p-5 pb-9 text-content-white lg:px-[5.625rem] lg:py-16">
      <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-6">
        <div className="flex flex-col gap-4 lg:mr-12">
          <img src={logo} alt="unmaze-logo" className="w-40 lg:w-[15rem]" />
          <div className="flex justify-between lg:flex-col lg:items-start lg:gap-6">
            <Text
              size="md"
              className="max-w-xl pr-4 text-content-white lg:pr-8"
            >
              Unmaze is the financial co-pilot you deserve. Invest smarter, save
              more, and achieve your financial goals faster.
            </Text>
            <MadeInIndiaLogo />
          </div>
        </div>
        <div className="flex justify-between lg:w-full lg:max-w-[30rem]">
          <div className="flex flex-col gap-3 lg:gap-6">
            <Heading variant="sub-heading-1" className="text-primary-yellow">
              About Us
            </Heading>
            <div className="flex flex-col gap-2 lg:gap-3">
              {footerLinks.map((link) => (
                <a key={link.id} href={link.href}>
                  <Text size="sm">{link.title}</Text>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:gap-6">
            <Heading variant="sub-heading-1" className="text-primary-yellow">
              Contact Us
            </Heading>
            <div className="flex flex-col gap-3 font-font-body lg:gap-4">
              <a href="mailto:corporate@unmaze.app">
                <Text size="sm">corporate@unmaze.app</Text>
              </a>
              <div className="flex gap-3 lg:gap-6">
                {socialIconLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    data-testid="social-link"
                  >
                    <picture>
                      <img src={link.icon} alt={link.title} />
                    </picture>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 w-full lg:my-12" />
      <Text size="xs">Copyright © 2023 Unmaze.app | All rights reserved</Text>
    </div>
  );
};

export default Footer;
