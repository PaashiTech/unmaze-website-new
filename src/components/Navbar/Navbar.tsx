import logo from "../../assets/unmaze-logo-dark.svg";

const Navbar = () => {
  return (
    <nav className="p-5 flex justify-center items-center shadow-md bg-gradient-to-r from-[#FFF000] to-[#CCFD62] sticky top-0 z-50">
      <img src={logo} alt="unmaze-logo" />
    </nav>
  );
};

export default Navbar;
