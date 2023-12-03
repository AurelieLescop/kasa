import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import coverpicture from "../../assets/IMG_cover.png";

const homebannerheight = 111;

function Home() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className="home">
      <Header />
      <main>
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
      <Footer />
    </div>
  );
}

export default Home;