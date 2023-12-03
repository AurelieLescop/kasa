import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Imageslider from "../../components/Imageslider/Imageslider";
import Collapse from "../../components/Collapse/Collapse";
import NotFound from "../Notfound/NotFound";
import Host from "../../components/Host/Host";
import Tag from "../../components/Tag/Tag";

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
      <div className="accomodation">
        <Header />
        <main>
          <Imageslider slides={datas.pictures} />

          <section className="presentation">
            <div>
              <h2 className="location">{datas.title}</h2>
              <h3>{datas.location}</h3>

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
        <Footer />
      </div>
    );
  } else {
    return <NotFound />;
  }
}
export default Accomodation;
