import logo from "../../assets/unmaze-logo-dark.svg";
import Text from "../_UI/Typography/Text";
import { NavbarLink } from "./Navbar.types";
import { navbarButtonData, navbarLinksData } from "./navbarData";

interface NavbarProps {
  links?: (NavbarLink & { id: number })[];
  button?: NavbarLink;
}

const Navbar: React.FC<NavbarProps> = ({
  links = navbarLinksData,
  button = navbarButtonData,
}) => {
  return (
    <nav className="sticky top-0 z-50 flex h-[4.5rem] w-full items-center justify-center gap-12 bg-gradient-unmaze-2 px-[1.25rem] py-[1rem] shadow-nav-shadow lg:justify-between lg:px-[5.625rem] lg:py-[0.875rem]">
      <a href="/">
        <img src={logo} alt="unmaze-logo" />
      </a>
      <div className="hidden items-center  font-font-body text-xl tracking-wider text-primary-green lg:flex lg:gap-12 xl:gap-20">
        {/* Links */}
        {links?.map((link) => (
          <a href={link.redirectTo} key={link.id}>
            <Text size="sm">{link.linkText}</Text>
          </a>
        ))}

        {/* Button */}
        <a
          href={button?.redirectTo}
          className="rounded-full border-2 border-primary-green px-[1.75rem] py-[0.75rem] font-medium"
        >
          <Text size="sm">{button?.linkText}</Text>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
