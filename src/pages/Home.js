import Header from "../components/Header";
import Footer from "../components/Footer";
//import Accomodationgrid from "../components/Accomodationgrid";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";

function Home() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("logements.json")
      .then((response) => response.json())
      //   .then((datas) => console.log(datas));
      //   .then((res) => console.log(res));
      .then((data) => setDatas(data));
    //.catch((error) =>)

    // .catch((error)) => console.error(error)); à remettre non ?
  }, []);
  return (
    <div className="home">
      <Header />
      <Banner />

      {/* <ul> */}
      <div className="accomodation">
        <div className="accomodation_list">
          {/* <div className="accomodation_card"> */}
          {datas.map((data) => (
            <Card key={data.id} data={data} />
          ))}

          {/* </div> */}
        </div>
      </div>
      {/* </ul> */}

      <Footer />
    </div>
  );
}

export default Home;
