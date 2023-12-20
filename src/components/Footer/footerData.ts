import linkedinIcon from "../../assets/social-icons/linkedin.svg";
import instagramIcon from "../../assets/social-icons/instagram.svg";
import twitterIcon from "../../assets/social-icons/twitter.svg";
import wellfoundIcon from "../../assets/social-icons/wellfound.svg";

type FooterLink = {
  id: number;
  title: string;
  href: string;
};

type SocialIconLink = {
  id: number;
  icon: string;
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
    icon: linkedinIcon,
    title: "linkedin-icon",
    href: "https://www.linkedin.com/company/unmaze-app/about/",
  },
  {
    id: 2,
    icon: instagramIcon,
    title: "instagram-icon",
    href: "https://www.instagram.com/unmaze.app/",
  },
  {
    id: 3,
    icon: twitterIcon,
    title: "twitter-icon",
    href: "https://twitter.com/UnmazeApp",
  },
  {
    id: 4,
    icon: wellfoundIcon,
    title: "wellfound-icon",
    href: "https://wellfound.com/company/unmaze-app",
  },
];
