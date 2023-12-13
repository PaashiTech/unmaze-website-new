import logo from "../../assets/unmaze-logo-dark.svg";

interface NavbarLink {
  linkText: string;
  redirectTo: string;
}

export const NavbarLinksData: NavbarLink[] = [
  {
    linkText: "Resources",
    redirectTo: "#resources",
  },
  {
    linkText: "Team",
    redirectTo: "#team",
  },
  {
    linkText: "Careers",
    redirectTo: "#careers",
  },
];

export const NavbarButtonData: NavbarLink = {
  linkText: "Join the waitlist",
  redirectTo: "#waitlist",
};

interface NavbarProps {
  links?: NavbarLink[];
  button: NavbarLink;
}

const Navbar: React.FC<NavbarProps> = ({
  links = NavbarLinksData,
  button = NavbarButtonData,
}) => {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-center bg-gradient-unmaze-2 p-5 shadow-nav-shadow lg:justify-between lg:px-[5.625rem] lg:py-[1.25rem]">
      <a href="/">
        <img src={logo} alt="unmaze-logo" />
      </a>
      <div className="hidden items-center gap-20 font-font-body text-xl tracking-wider text-primary-green lg:flex">
        {/* Links */}
        {links?.map((link) => <a href={link.redirectTo}>{link.linkText}</a>)}

        {/* Button */}
        <a
          href={button.redirectTo}
          className=" rounded-full border-2 border-primary-green px-9 py-3 font-medium"
        >
          {button.linkText}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
