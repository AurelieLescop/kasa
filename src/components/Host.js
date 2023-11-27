import React from "react";
import Ratingbar from "../components/Ratingbar";



function Host({datas}) {
    return (
<div className="host">
<div className="host__ratingbar">
  <Ratingbar rating={datas.rating} />{" "}
</div>
<div className="host__presentation">
  <pre className="host__name">
    {datas.host.name.replace(" ", "\n")}{" "}
  </pre>
  <img
    src={datas.host.picture}
    className="host__picture"
    alt="photographie de l'hôte"
  />
</div>
</div>)
}

export default Host;