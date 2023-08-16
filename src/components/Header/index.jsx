import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Header = () => {
  return (
    <nav className="header">
      <ul className="header__list">
        <div>
          <Link to="/" className="header__link">
            TalkJs
          </Link>
        </div>
        <div className="header__menu">
          <Link to="/my-network" className="header__link">
            My Network
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
