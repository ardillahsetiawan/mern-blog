import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className="logo-app">MERN-Blog | Ardillah Setiawan</p>
      </Link>

      <p className="menu-item" onClick={() => history.push("/login")}>
        Logout
      </p>
    </div>
  );
};

export default Header;
