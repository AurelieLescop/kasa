import React from "react";
import { useState } from "react";

// function Collapse(){

//     const [open, setOPen] = useState(false);
//     setOPen(!open);
//     return(
//         <div>
//         <button>toggle</button>
//         {open && <div>toggle me</div>}
//         </div>
//     )
// }
// export default Collapse;

function Collapse(props) {
  const [open, setOPen] = useState(true);
  // à changer selon si on veut ouvert ou non

  const display = () => {
    setOPen(!open);
  };

  return (
    <div className="collapse">
      {/* {if ()} */}
      {/* <button onClick={toggle}>fermé</button> */}
      {/* {open && (
            <div className="toggle">{props.children}</div> */}

            <div className="scrollingmenu">
            <h2>{props.label}</h2>
      <p onClick={display} className="icon">{open? "chevron haut" : "chevron bas"}</p>
      </div>
      {open && <div className="toggle">{props.children}</div>}
    </div>
  );
}
export default Collapse;

// export default Collapse;
