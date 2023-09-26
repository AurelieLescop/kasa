import Header from "../components/Header";
import Footer from "../components/Footer";
//import Accomodationgrid from "../components/Accomodationgrid";
import Grid from "../components/Grid";
import { useState, useEffect } from "react";


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
    <h1>page Accueil</h1>
    <ul>
        {datas
          .map((data) => (
            <Grid key={data.id} data={data} />
          ))}
      </ul>


    <Footer />
  </div>
    );
  }
  
  export default Home;