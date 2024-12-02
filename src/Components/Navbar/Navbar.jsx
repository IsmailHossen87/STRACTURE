import { useContext, useState } from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import pf from "../../assets/3135715.png";
import logo from "../../assets/chanel_logo_the_branding_journal.jpg";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart"> My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/aboutDetails">About</NavLink>
      </li>
      <li>
        <NavLink to="/service">Service</NavLink>
      </li>
    </>
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleNavbar = () => {
    logOut();
    Swal.fire("Good job!", "Logged out successfully!", "success");
  };

  return (
    <div className={`navbar ${isDarkMode ? "dark-mode" : "bg-base-100"}`}>
      <div className="navbar-start">
        <div className="dropdown ">
          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <IoMdMenu className="text-2xl" />
            )}
          </button>
          <div className="">
            {toggle && (
              <ul
                className="dropdown-content md:w-[82vh] w-[66vh] left-0 mt-1 z-[1] p-2 shadow rounded-box border bg-black menu menu-sm  text-white"
                onClick={() => setToggle(false)}
              >
                {links}
              </ul>
            )}
          </div>
        </div>
        <img src={logo} className="w-16 hidden lg:block" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <img src={pf} alt="" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm">{user.displayName}</button>
              </li>
              <li>
                <button onClick={handleNavbar} className="btn btn-sm">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
        <button className="ml-10" onClick={toggleDarkMode}>
          <AiOutlinePoweroff className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
