import { NavbarLink } from "./Navbar.types";

export const navbarLinksData: (NavbarLink & { id: number })[] = [
  {
    id: 1,
    linkText: "Resources",
    redirectTo: "#resources",
  },
  {
    id: 2,
    linkText: "Team",
    redirectTo: "#team",
  },
  {
    id: 3,
    linkText: "Careers",
    redirectTo: "#careers",
  },
];

export const navbarButtonData: NavbarLink = {
  linkText: "Join the waitlist",
  redirectTo: "#waitlist",
};
