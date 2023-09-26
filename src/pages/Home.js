import Header from "../components/Header";
import Footer from "../components/Footer";
//import Accomodationgrid from "../components/Accomodationgrid";
import Grid from "../components/Grid";
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


    // .catch((error)) => console.error(error));
  }, []);
    return (
  <div className="home">
    <Header />
    <Banner />

    <h1>page Accueil</h1>
    {/* <ul> */}
    <div className="list">
        {datas
          .map((data) => (
            <Grid key={data.id} data={data} />
          ))}
          </div>
      {/* </ul> */}


    <Footer />
  </div>
    );
  }
  
  export default Home;