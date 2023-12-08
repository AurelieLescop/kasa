import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Imageslider from "../../components/Imageslider/Imageslider";
import Collapse from "../../components/Collapse/Collapse";
import NotFound from "../Notfound/NotFound";
import Host from "../../components/Host/Host";
import Tag from "../../components/Tag/Tag";

function Accomodation() {
  /**Récupération de l'adresse */
  let params = useParams();

  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("../logements.json")
      .then((response) => response.json())
      .then((data) => {
        setDatas(
          /**Filtre sur le tableau de données pour récupérer les données liées à l'appartement */
          data.filter((accomodation) => accomodation.id === params.id)[0]
        );
      })
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));
  }, [params.id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (datas) {
    const equipments = (
      <ul>
        {datas.equipments.map((equipment) => (
          <li key={Math.random()}>{equipment}</li>
        ))}
      </ul>
    );
    const datastags = (
      <div className="alltags">
        {datas.tags.map((tag) => (
          <div key={Math.random()} className="tag">
            <p>{tag}</p>
          </div>
        ))}
      </div>
    );

    return (
      <main className="accomodation">
        <Imageslider slides={datas.pictures} />
        <section className="presentation">
          <div>
            <h1 className="location">{datas.title}</h1>
            <h2>{datas.location}</h2>
            <Tag datastags={datastags} />
          </div>
          <Host datas={datas} />
        </section>

        <section className="accomodation__collapse">
          <Collapse label="Description">
            <p>{datas.description}</p>
          </Collapse>
          <div className="spacer_10"></div>
          <Collapse label="Équipements">
            <div className="equipment">{equipments}</div>
          </Collapse>
        </section>
      </main>
    );
  } else {
    return <NotFound />;
  }
}
export default Accomodation;
