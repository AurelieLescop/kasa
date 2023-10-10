import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
// import datas from '../public/logements.json';
import { useEffect, useState } from "react";




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
console.log(params.id);

const [datas, setDatas] = useState([]);
useEffect(() => {
  fetch("../logements.json")
    .then((response) => response.json())
    //   .then((datas) => console.log(datas));
    //   .then((res) => console.log(res));
    .then((data) => setDatas(data));
  //.catch((error) =>)

  // .catch((error)) => console.error(error)); à remettre non ?
}, []);
console.log(datas);
// const dataCurrentAccomodation = datas.filter(datas => datas.id === params.id);
const dataCurrentAccomodation = datas.filter((data) => data.id === params.id);
console.log(datas.id)
console.log(dataCurrentAccomodation);
// const getFlat = datas.find((appartment) => {
//   return appartment.id === id;
// });
console.log(dataCurrentAccomodation[0].id);
console.log(dataCurrentAccomodation[0].title)


    return (
  <div>
    <Header />
    <h1>page Accomodation</h1>

    {/* {accomodation.filter} */}
    {/* <p>{dataCurrentAccomodation.title}</p> */}
    {/* <h2>{dataCurrentAccomodation[0].title}</h2> */}
    {/* {logements.filter((logement) => (
      <img key={logement.id} src={logement.pictures} alt ="logement" />
    ))} */}
    <Footer />
  </div>
    );
  }
  
  export default Accomodation;