import React from "react";
import Ratingbar from "../Ratingbar/Ratingbar";

function Host({ datas }) {
  return (
    <section className="host">
      <div className="host__ratingbar">
        <Ratingbar rating={datas.rating} />{" "}
      </div>
      <div className="host__presentation">
        <pre className="host__presentation__name">{datas.host.name.replace(" ", "\n")} </pre>
        <img
          src={datas.host.picture}
          className="host__presentation__picture"
          alt="photographie de l'hôte"
        />
      </div>
    </section>
  );
}

export default Host;
