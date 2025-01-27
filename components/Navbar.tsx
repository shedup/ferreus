import Image from "next/image";
import LOGO from "../PFS-optimized.svg";

// import Logo from "./Logo";

function NavBar() {
  return (
    <>
      <nav className="p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Image src={LOGO} alt="Logo" className="w-20 h-20" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default NavBar;
