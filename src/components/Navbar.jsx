import { NavLink } from "react-router-dom";

import { log } from "../assets/images";
import { logo } from "../assets/images";
import './Parvendra_web-dev.pdf'; 


const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={log} alt='logo' className='w-12 h-12 object-contain' />
      </NavLink>
      <nav className='flex text-xl gap-7 font-bold'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Contact
        </NavLink>
      </nav>
      <a href="Parvendra_web-dev.pdf" download><h3 className="font-extrabold text-xl">Resume</h3></a>
      
    </header>
  );
};

export default Navbar;
