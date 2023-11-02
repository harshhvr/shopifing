import React, { useState } from "react";
import {} from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/logo-lite.svg";
import defaultAvatar from "../../../assets/avatar-lite.svg";

import {
  FaAt,
  FaHome,
  FaInfoCircle,
  FaListAlt,
  FaSearch,
  FaShapes,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaTh,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../../actions/userAction";
import { useAlert } from "react-alert";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const { user } = useSelector((state) => state.user);

  const isAdmin = user && user.role && user.role === "admin";

  const alert = useAlert();
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  function handleHamburger() {
    setOpenSidebar(!openSidebar);
  }

  function handleSidebar() {
    setOpenSidebar(false);
  }

  return (
    <header className="header">
      <nav id="navbar" className="navbar">
        <div className="navbar-inner">
          <div className="navbar-inner-left">
            <a href="/home" className="brand">
              <img src={logo} alt="Brand icon" className="brand-icon" />
              <div className="brand-name">Shopifing</div>
            </a>

            <ul className="nav-items hideInMobile">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link" end>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" end>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" end>
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar-inner-right">
            <ul className="nav-items hideInMobile">
              <li className="nav-item">
                <NavLink to="/search" className="nav-link-2" end>
                  <FaSearch />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link-2" end>
                  <FaShoppingCart />
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                {/* <NavLink to="/account" className="nav-link-2" end>
                    <FaUser />
                  </NavLink> */}

                <button className="dropdown-toggler">
                  <img
                    src={
                      user && user.avatar && user.avatar.url
                        ? user.avatar.url
                        : defaultAvatar
                    }
                    alt="Avatar"
                    className="user-avatar"
                  />
                </button>

                <div className="dropdown-content">
                  {user && (
                    <ul className="nav-items">
                      {isAdmin && (
                        <li className="nav-item">
                          <Link to="/admin/dashboard" className="nav-link">
                            <FaTh />
                            <span>Dashboard</span>
                          </Link>
                        </li>
                      )}

                      <li className="nav-item">
                        <Link to="/account" className="nav-link">
                          <FaUser />
                          <span>Profile</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/orders" className="nav-link">
                          <FaListAlt />
                          <span>Orders</span>
                        </Link>
                      </li>
                    </ul>
                  )}

                  <div className="vr"></div>

                  <ul className="nav-items">
                    {user ? (
                      <li className="nav-item">
                        <Link
                          to="#logout"
                          className="nav-link"
                          onClick={logoutUser}
                        >
                          <FaSignOutAlt />
                          <span>Log out</span>
                        </Link>
                      </li>
                    ) : (
                      <li className="nav-item">
                        <Link to="/login" className="nav-link">
                          <FaSignInAlt />
                          <span>Log in</span>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            </ul>

            <button
              className={`hamburger ${openSidebar ? "active" : ""}`}
              id="hamburger"
              onClick={handleHamburger}
            >
              <div></div>
            </button>
          </div>
        </div>
      </nav>

      <nav
        className={`site-sidebar ${openSidebar ? "active" : ""}`}
        onClick={handleSidebar}
      >
        <div className="site-sidebar-inner">
          <ul className="nav-items">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link" end>
                <FaHome />
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/search" className="nav-link" end>
                <FaSearch />
                <span>Search</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" end>
                <FaShapes />
                <span>Products</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" end>
                <FaAt />
                <span>Contact</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" end>
                <FaInfoCircle />
                <span>About</span>
              </NavLink>
            </li>
          </ul>

          <div className="vr"></div>

          <ul className="nav-items">
            <li className="nav-item">
              <div className="user-info">
                <img
                  src={
                    user && user.avatar && user.avatar.url
                      ? user.avatar.url
                      : defaultAvatar
                  }
                  alt="Avatar"
                  className="user-avatar"
                />

                {user && (
                  <div className="user-info-properties">
                    <div className="user-name">
                      {user.name ? user.name : ""}
                    </div>
                    <div className="user-email">
                      {user.email ? user.email : ""}
                    </div>
                  </div>
                )}
              </div>
            </li>

            {user && isAdmin && (
              <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">
                  <FaTh />
                  <span>Dashboard</span>
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link to="/account" className="nav-link">
                <FaUser />
                <span>Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link">
                <FaListAlt />
                <span>Orders</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FaShoppingCart />
                <span>Cart</span>
              </Link>
            </li>

            {user ? (
              <li className="nav-item">
                <Link to="#logout" className="nav-link" onClick={logoutUser}>
                  <FaSignOutAlt />
                  <span>Log out</span>
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <FaSignInAlt />
                  <span>Log in</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
