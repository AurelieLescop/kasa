import React from "react";
import { useState } from "react";

function Collapse(props) {
  const [open, setOPen] = useState(false);
  // à changer selon si on veut ouvert ou non

  const display = () => {
    setOPen(!open);
  };

  return (
    <div className="collapse">
      <div className="collapse__menu">
        <h2>{props.label}</h2>
        <p onClick={display} className="collapse__menu__scrolling">
          {open ? (
            <i className="fa-solid fa-chevron-up chevron"></i>
          ) : (
            <i className="fa-solid fa-chevron-up fa-rotate-180 chevron__inverse"></i>
          )}
        </p>
      </div>
      {open && <div className="collapse__menu__description">{props.children}</div>}
    </div>
  );
}
export default Collapse;
