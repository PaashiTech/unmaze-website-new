import logo from "../../assets/unmaze-logo-dark.svg";

const Navbar = () => {
  return (
    <nav className="bg-gradient-unmaze-2 shadow-nav-shadow sticky top-0 z-50 flex w-full items-center justify-center p-5 lg:justify-between lg:px-[5.625rem] lg:py-[1.25rem]">
      <a href="/">
        <img src={logo} alt="unmaze-logo" />
      </a>
      <div className="font-font-body hidden items-center gap-20 text-xl tracking-wider text-primary-green lg:flex">
        <a href="#resources">Resources</a>
        <a href="#team">Team</a>
        <a href="#careers">Careers</a>
        <a
          href="#waitlist"
          className=" rounded-full border-2 border-primary-green px-9 py-3 font-medium"
        >
          Join the Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
