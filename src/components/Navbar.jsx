import logo from "../assets/dev.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex lg:ml-20 flex-shrink-0 items-center">
        <img className="mx-2 w-32 " src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl ">
        <a target="_blank" href="https://www.linkedin.com/in/arjun-kumar-03a187279/"><FaLinkedin /></a>
        <a target="_blank" href="https://github.com/Arjun11221"><FaGithub /></a>
        <a target="_blank" href="https://www.instagram.com/urfav_arjxn007?igsh=MWJ3b2R3MWRmdnc1ag=="><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
