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
      <div className="menu">
        <h2>{props.label}</h2>
        <p onClick={display} className="menu__scrolling">
          {open ? (
            <i className="fa-solid fa-chevron-up chevron"></i>
          ) : (
            <i className="fa-solid fa-chevron-up fa-rotate-180 chevron_inverse"></i>
          )}
        </p>
      </div>
      {open && <div className="description">{props.children}</div>}
    </div>
  );
}
export default Collapse;
