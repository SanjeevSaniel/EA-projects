import "../css/Navbar.css";
import { Outlet, NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <header>
          <span className="the">The</span>
          <span className="title">Siren</span>
        </header>
        <ul>
          <li>
            <NavLink className="nav-links" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Bollywood">
              Bollywood
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Technology">
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Hollywood">
              Hollywood
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Fitness">
              Fitness
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Food">
              Food
            </NavLink>
          </li>
        </ul>
      </nav>
      <Divider variant="middle" />
      <br />
      <br />
      <Outlet />
    </>
  );
};

export default Navbar;
