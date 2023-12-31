import React from "react";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import coverpicture from "../../assets/IMG_cover.png";

/**Définition de la hauteur de l'image du composant Banner */
const homebannerheight = 111;

function Home() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <main className="home">
        <Banner src={coverpicture} height={homebannerheight}>
          <div className="bannertitle">
            <h1>
              Chez vous, <br className="break" />
              partout et ailleurs
            </h1>
          </div>
        </Banner>
        <section className="accomodation">
          <section className="accomodation__list">
            {datas.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </section>
        </section>
      </main>
    );
  }
}

export default Home;
