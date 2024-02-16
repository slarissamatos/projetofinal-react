import React from "react";
import "./styles.css";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="banner">
      <Menu />
      <img src="../../../public/banner.png" alt="Banner" />
    </div>
  );
};

export default Header;
