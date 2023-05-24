import React, { useState } from "react";
import Caret from "./caret.svg";
import "./Dropdown.css";
import { v4 } from "uuid";

const Dropdown = (props) => {
  const arr = props.options;

  const [cName, setClassName] = useState("");
  const [selected, setSelected] = useState(props.placeholder);

  const toggleMenu = (e) => {
    if (!cName) {
      setClassName("menu-active");
    } else {
      setClassName("");
    }
  };

  const handleOption = (e) => {
    setSelected(e.target.innerHTML);
    props.select(e.target.innerHTML);
    setClassName("");
  };

  return (
    <div className="dropdown-container">
      <div className="selected-option" onClick={toggleMenu}>
        {selected}
        <img className="dropdown-icon" src={Caret} alt="dropdown icon" />
      </div>
      <ul className={cName + " dropdown-list "}>
        {arr.map((el, index) => (
          <li key={v4()} onClick={handleOption} className={props.cName}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
