import React from "react";
import Button from "../components/Button";

const Header = () => {
  const onClick = () => {
    console.log("Clicked");
  };
  return (
    <header className="header">
      <h2 style={HeaderStyling}>This is header</h2>
      <Button color="green" text="button1" onClick={onClick} />
      <Button color="red" text="button2" onClick={onClick} />
      <Button color="blue" text="button3" onClick={onClick} />
    </header>
  );
};

const HeaderStyling = {
  color: "red",
  backgroundColor: "yellow",
};

export default Header;
