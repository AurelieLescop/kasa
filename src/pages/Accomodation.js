import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
// import datas from '../public/logements.json';
import { useEffect, useState } from "react";
import Imageslider from "../components/Imageslider";

// function getIdFromUrl() {
//   const currentUrl = window.location.href;
//   const url = new URL(currentUrl);
//   return url.searchParams.get("id");
// }

function Accomodation() {
  // à conserver
  // const accomodationFromUrl = useParams();
  // console.log(accomodationFromUrl.id);
  // console.log(accomodationFromUrl);

  // const [datas, setDatas] = useState([]);
  // useEffect(() => {
  //   fetch("logements.json")
  //     .then((response) => response.json())
  //     .then((data) => setDatas(data));
  // // console.log(data);
  //   }, []);

  // useEffect(() => {
  // 	const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
  // }, [idAccomodation]);

  // getIdFromUrl()

  // const idAccomodation = useParams('id').id;
  // const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);

  // useEffect(() => {
  // 	const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
  // }, [idAccomodation]);

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
  return (
    <div>
      <Header />

      <div>
        {isLoading && <p>Loading...</p>}
        {datas && <h2>{datas.title}</h2>}
      </div>

      {datas && <Imageslider slides={datas.pictures} />}

      <Footer />
    </div>
  );
}

export default Accomodation;
