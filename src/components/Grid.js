import React from "react";

const Grid = ({ data }) => {
  return (
    <li className="grid">
      <img
        src={data.cover}
        alt={"photo " + data.title}
      />
      <div className="infos">
        <h2>{data.title}</h2>
        {/* <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p> */}
      </div>
    </li>
  );
};

export default Grid;




// import { useState, useEffect } from "react";

// // async function fetchAccomodationFromFile() {
// //   const res = await fetch("logements.json");
// //   const data = await res.json();
// //   console.log(data);
// //   console.log(data.length);
// // //   console.log(data.map({id, title}));
// //   return data;
// // }

// // useEffect(() => {
// //   fetch("logements.json")
// //     .then((response) => response.json())
// //     .then((datas) => console.log(datas));
// //   // .catch((error)) => console.error(error));
// // }, []);

// /*
//   fetch("logements.json)
//   .then((res) => res.json())
//   .then(console.log) ou then((res) => console.log(res))
//   .catch(console.error):
//   */

// // fetchAccomodationFromFile();

// function Grid() {
//   const [datas, setDatas] = useState([]);
//   useEffect(() => {
//     fetch("logements.json")
//       .then((response) => response.json())
//       //   .then((datas) => console.log(datas));
//     //   .then((res) => console.log(res));
//     .then((data) => setDatas(data));
//     //.catch((error) =>)


//     // .catch((error)) => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>Grid</h1>
//       <ul>
//         {datas
//           .map((data) => (
//             <Grid key={data.id} data={data} />
//           ))}
//       </ul>
//       {/* {datas.map((data => (
//         <img key={data.id} src={data.pictures} alt ="logement" />
//       )))} */}
//     </div>
//   );
// }

// export default Grid;
