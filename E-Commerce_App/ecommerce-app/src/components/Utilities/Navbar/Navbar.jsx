// import { useState, useRef } from "react";
import React from "react";
import "./Navbar.css";
import { Outlet, NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
// import { Link } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/icons-material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Button from "@mui/material/Button";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import Grow from "@mui/material/Grow";
// import Paper from "@mui/material/Paper";
// import Popper from "@mui/material/Popper";
// import MenuItem from "@mui/material/MenuItem";
// import MenuList from "@mui/material/MenuList";
// import Stack from "@mui/material/Stack";

// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <header className="logo">
          <div class="item blue"></div>
          <span className="title">iSHOP</span>
        </header>
        <ul className="list">
          <li>
            <NavLink className="nav-links" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Store">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/iPhone">
              iPhone
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/iPad">
              iPad
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Macbook">
              Macbook
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Accessories">
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
      <Divider variant="middle" />

      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
