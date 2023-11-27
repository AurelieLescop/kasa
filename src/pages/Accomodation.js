import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Imageslider from "../components/Imageslider";
import Collapse from "../components/Collapse";
import Ratingbar from "../components/Ratingbar";

import NotFound from "./NotFound";

function Accomodation() {
  let params = useParams();
  console.log("params.id", params.id);

  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const [firstName, lastName] = datas.host.name.split(" ");

  useEffect(() => {
    setIsLoading(true);
    fetch("../logements.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDatas(
          data.filter((accomodation) => accomodation.id === params.id)[0]
        );
        setIsLoading(false);
      });
  }, [params.id]);

  console.log(datas);

  // const name = datas.host.name;

  // if datas... return
  // else
  // success / loading / failure if else else

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (datas) {
    const equipments = (
      <ul>
        {datas.equipments.map((equipment) => (
          <li>{equipment}</li>
        ))}
      </ul>
    );
    const datastags = (
      <div className="alltags">
        {datas.tags.map((tag) => (
          <div className="tag">
            <p>{tag}</p>
          </div>
        ))}
      </div>
    );

    return (
      <div>
        <Header />
        <main>
          <Imageslider slides={datas.pictures} />

          <div className="presentation">
            <div>
              <h2 className="location">{datas.title}</h2>
              <h3>{datas.location}</h3>
              <div>{datastags}</div>
            </div>
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
            </div>
          </div>

          <div className="accomodation__collapse">
            <Collapse label="Description">
              <p>{datas.description}</p>
            </Collapse>
            <div className="spacer_10"></div>
            <Collapse label="Équipements">
              <div className="equipment">{equipments}</div>
            </Collapse>
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    return <NotFound />;
  }
}
export default Accomodation;
