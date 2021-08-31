import React from "react";
import Button from "../components/Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h2 style={HeaderStyling}>This is header</h2>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add Task"}
        onClick={onAdd}
      />
    </header>
  );
};

const HeaderStyling = {
  color: "red",
  backgroundColor: "yellow",
};

export default Header;
