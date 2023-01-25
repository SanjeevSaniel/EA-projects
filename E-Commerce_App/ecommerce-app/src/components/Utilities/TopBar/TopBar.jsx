import React, { useContext } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Search from "../Search/Search";
// import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { CartCountContext } from "../../Pages/LandingPage/LandingPage";
import UserProfile from "../UserProfile/UserProfile";
import "./TopBar.css";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 6,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const TopBar = ({ languages, currencies }) => {
  const cartCount = useContext(CartCountContext);

  return (
    <div className="topbar">
      <div className="selectables">
        <Dropdown id="language" options={languages} />
        <Dropdown id="currency" options={currencies} />
      </div>
      <div className="actionables">
        <UserProfile />

        <Link to="/Cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon />
              {/*<ShoppingCart /> */}
            </StyledBadge>
          </IconButton>
        </Link>

        {/* <Search /> */}
      </div>
    </div>
  );
};

export default TopBar;
