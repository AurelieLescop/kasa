import React from 'react';
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

function Collapse(props){
    const [open, setOPen] = useState(true);
    // à changer selon si on veut ouvert ou non

    const toggle = () => {
        setOPen(!open);
      };
      
      return (
        <div>
          <button onClick={toggle}>toggle</button>
          {open && (
            <div className="toggle">{props.children}</div>
          )}
        </div>
      );
}
export default Collapse;


// export default Collapse;
