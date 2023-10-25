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
console.log("params.id", params.id);

//essai 1 fetch
// const [datas, setDatas] = useState([]);
// useEffect(() => {
//   fetch("../logements.json")
//     .then((response) => response.json())
//     .then((data) => setDatas(data));
// }, []);
//fin essai 1

// essai 2 loading state
const [datas, setDatas] = useState(null);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  setIsLoading(true);
  fetch("../logements.json")
    .then((response) => response.json())
    .then((data) => {
console.log(data)
      setDatas (data.filter((accomodation) => accomodation.id === params.id)[0])
      setIsLoading(false);
    });
}, []);
//fin essai 2

//essai 3 async / await 
// const [datas, setDatas] = useState([]);
// useEffect(() => {
//   (async () => {
//       const data = await fetch("../logements.json")
//           .then(res => res.json())

//       setDatas(data)
//   })()
// }, [])
//fin essai 3

// // const dataCurrentAccomodation = datas.filter(datas => datas.id === params.id);

// console.log(datas.id)
// const getFlat = datas.find((appartment) => {
//   return appartment.id === id;
// });
// console.log(dataCurrentAccomodation[0].id);
// console.log(dataCurrentAccomodation[0].title)

// console.log(dataCurrentAccomodation[0]["title"]);
// console.log("dataCurrentAccomodation[0].title", dataCurrentAccomodation[0].title);






    return (
  <div>
    <Header />
    <h1>page Accomodation</h1>

    <div>
      {isLoading && <p>Loading...</p>}
      {datas && (
        <h2>
{datas.title}
        </h2>
      )}
   </div>

   
    <Footer />
  </div>
    );
  }
  
  export default Accomodation;