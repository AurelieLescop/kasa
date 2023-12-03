import React from "react";
import { useState } from "react";
import { useRef } from "react";

function Collapse(props) {
  const [open, setOPen] = useState(false);
  // à changer selon si on veut ouvert ou non

  const display = () => {
    setOPen(!open);
  };
  // {open && <div className="collapse__menu__description">{props.children}</div>}

  const contentRef = useRef();
  // if (contentRef.current) console.log(contentRef.current.scrollHeight);

  return (
    <article className="collapse">
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

      <div
        className="collapse__description"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="collapse__menu__description">{props.children}</div>
      </div>
    </article>
  );
}
export default Collapse;
