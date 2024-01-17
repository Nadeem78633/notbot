import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoIcon from "../assets/img/logo-icon.svg";
import smiley from "../assets/img/smiley.svg";
import "../assets/Css/header.css";
import links from "../utils/links";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [hideMenuItems, setHideMenuItems] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setHideMenuItems(window.innerWidth >= 991);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "white", boxShadow: "none" }}
        >
          <Toolbar className="toolbar">
            {/* Image at the start */}
            <img src={logoIcon} alt="good" />

            <div className="parent-div">
              <div className="child-div1">
                <NavLink
                  to="./booking"
                  activeClassName="active"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "gray",
                  })}
                >
                  Booking Types
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "gray",
                  })}
                  to="./polls"
                  className="nav-link"
                >
                  Date Polls
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "gray",
                  })}
                  to="./my-booking"
                  className="nav-link"
                >
                  My Bookings
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "gray",
                  })}
                  to="./my-contacts"
                  className="nav-link"
                >
                  My Contacts
                </NavLink>
              </div>
              <div className="child-div2">
                <NavLink
                  style={{
                    color: "#1569ef",
                    fontFamily: "arial",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                  to="./lifetime-access"
                  className="nav-link"
                >
                  Upgrade 29$ Lifetime Access!
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "gray",
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                  })}
                  to="./profile"
                  className="nav-link"
                >
                  <img
                    src={smiley}
                    alt="data"
                    style={{ borderRadius: "50%", marginRight: "5px" }}
                  />
                  Profile
                </NavLink>
                <h6>EARNINGS 0.0$</h6>
              </div>
            </div>

            <Button onClick={handleClick}>
              <MenuIcon sx={{ color: "black" }} />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                sx: {
                  border: "1px solid #ccc",
                },
              }}
              style={{ boxShadow: "none" }}
              elevation={0}
            >
              {!hideMenuItems && (
                <>
                  <MenuItem onClick={handleClose}>
                    <NavLink
                      className="menu-nav-link"
                      to="./booking"
                      activeClassName="active"
                      style={({ isActive }) => ({
                        color: isActive ? "black" : "gray",
                      })}
                    >
                      Booking Types
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "black" : "gray",
                      })}
                      className="menu-nav-link"
                      to="./polls"
                    >
                      Date Polls
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "black" : "gray",
                      })}
                      className="menu-nav-link"
                      to="./my-booking"
                    >
                      My Bookings
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "black" : "gray",
                      })}
                      className="menu-nav-link"
                      to="./my-contacts"
                    >
                      My Contacts
                    </NavLink>
                  </MenuItem>
                  {/* Other Links */}
                  <MenuItem onClick={handleClose}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "black" : "gray",
                      })}
                      className="menu-nav-link"
                      to="./lifetime-access"
                    >
                      Upgrade Lifetime Access
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "black" : "gray",
                      })}
                      className="menu-nav-link"
                      to="./profile"
                    >
                      Profile
                    </NavLink>
                  </MenuItem>
                </>
              )}
              {links.map((link, index) => (
                <div key={index}>
                  <MenuItem onClick={handleClose}>{link.text}</MenuItem>
                  {(index === 1 || index === 6) && <Divider />}
                </div>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
