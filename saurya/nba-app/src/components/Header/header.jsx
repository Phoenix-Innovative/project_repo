import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import SideNav from "./SideNav/sideNav";

const Header = props => {
  const navBar = () => (
    <div className="header-bars">
      <FontAwesome
        name="bars"
        className="ftawesome-bars"
        onClick={props.onOpenNav}
      />
    </div>
  );

  const logo = () => (
    <Link to="/" className="header-logo">
      <img src="/images/nba_logo.png" alt="nba logo" />
    </Link>
  );

  return (
    <header className="header">
      <SideNav {...props} />
      <div className="headerOpt">
        {navBar()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
