import React from "react";
import { Link } from "react-router-dom"; // Correct import for Link
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <ul className=" justify-evenly items-center flex px-14 h-[20%] w-[100%] bg-black">
        <div>
          <img className="h-[100px] w-[100px]" src={logo} alt="Logo" />
        </div>

        <div className="flex space-x-4">
          <li className="text-white p-4 hover:text-red-400 hover:border-b-4 hover:border-b-red-400">
            <Link to="/">Product List</Link>
          </li>
          <li className="text-white p-4 hover:text-red-400 hover:border-b-4 hover:border-b-red-400">
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li className="text-white p-4 hover:text-red-400 hover:border-b-4 hover:border-b-red-400">
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
