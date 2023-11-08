import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Imageslider from "../components/Imageslider";
import Collapse from "../components/Collapse";

function Accomodation() {
  let params = useParams();
  console.log("params.id", params.id);

  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  // if datas... return
  // else
  // success / loading / failure if else else

  if (datas) {
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
        <div className="tag">{tag}</div>
      ))}
    </div>
  );

    return (
      <div>
        <Header />

        {datas && <Imageslider slides={datas.pictures} />}

        <div>
          {isLoading && <p>Loading...</p>}

          {datas && <h2>{datas.title}</h2>}
          {datas && <div>{datas.location}</div>}
          {datas && <div>{datastags}</div>}
          {datas && (
            <Collapse label="Description" className="descriptiontag">
              <p>{datas.description}</p>
            </Collapse>
          )}
          {datas && <Collapse label="Équipements"><div className="equipment">{equipments}</div></Collapse>}
        </div>

        <Footer />
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default Accomodation;
