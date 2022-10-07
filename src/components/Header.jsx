import React from "react";
import meme from "../assets/troll-face.png";
import classes from "./Header.module.css";

const Header = function () {
  return (
    <header className={classes.header}>
      <img src={meme} alt="meme-logo" className={classes["header--img"]} />
      <h2 className={classes["header--title"]}>Meme Generator</h2>
      <h4 className={classes["header--project"]}>React Course - Project 3</h4>
    </header>
  );
};

export default Header;
