import React from "react";
import "../css/Header.css";
import HighlightIcon from "@mui/icons-material/Highlight";

const Header = () => {
  ////3. Create a Header.jsx component that renders a <header> element
  //to show the Keeper App name in an <h1>.
  return (
    <header className="header">
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
    </header>
  );
};

export default Header;
