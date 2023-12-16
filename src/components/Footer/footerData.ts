import linkedinMobile from "../../assets/social-icons/linkedIn-mobile.png";
import linkedinDesktop from "../../assets/social-icons/linkedIn-desktop.png";
import instagramMobile from "../../assets/social-icons/instagram-mobile.png";
import instagramDesktop from "../../assets/social-icons/instagram-desktop.png";
import twitterMobile from "../../assets/social-icons//twitter-mobile.png";
import twitterDesktop from "../../assets/social-icons/twitter-desktop.png";
import wellfoundMobile from "../../assets/social-icons/wellfound-mobile.png";
import wellfoundDesktop from "../../assets/social-icons/wellfound-desktop.png";

type FooterLink = {
  id: number;
  title: string;
  href: string;
};

type SocialIconLink = {
  id: number;
  iconMobile: string;
  iconDesktop: string;
  title: string;
  href: string;
};

export const footerLinks: FooterLink[] = [
  {
    id: 1,
    title: "Home",
    href: "#home",
  },
  {
    id: 2,
    title: "Resources",
    href: "#resources",
  },
  {
    id: 3,
    title: "Careers",
    href: "#careers",
  },
];

export const socialIconLinks: SocialIconLink[] = [
  {
    id: 1,
    iconMobile: linkedinMobile,
    iconDesktop: linkedinDesktop,
    title: "linkedin-icon",
    href: "https://www.linkedin.com/company/unmaze-app/about/",
  },
  {
    id: 2,
    iconMobile: instagramMobile,
    iconDesktop: instagramDesktop,
    title: "instagram-icon",
    href: "https://www.linkedin.com/company/unmaze-app/about/",
  },
  {
    id: 3,
    iconMobile: twitterMobile,
    iconDesktop: twitterDesktop,
    title: "twitter-icon",
    href: "https://twitter.com/UnmazeApp",
  },
  {
    id: 4,
    iconMobile: wellfoundMobile,
    iconDesktop: wellfoundDesktop,
    title: "wellfound-icon",
    href: "https://wellfound.com/company/unmaze-app",
  },
];
