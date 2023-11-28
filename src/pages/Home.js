import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import coverpicture from "../IMG_cover.png";

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
        <Banner src={coverpicture} size={111}>
          <div className="h1title">
            <h1>
              Chez vous, <br className="break" />
              partout et ailleurs{" "}
            </h1>
          </div>
        </Banner>
        <div className="accomodation">
          <div className="accomodation_list">
            {datas.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
