import React from "react";

const Card = ({ data }) => {
  return (
    // <li className="grid">
<div>
    <article className="accomodation_card">
      <a
        href={"http://localhost:3000/Accomodation/" + data.id}
  // a.setAttribute("href", `./product.html?id=${canape._id}`);

        title="Plus de détails sur cet hébergement"
      >
        <img
          className="accomodation_picture"
          src={data.cover}
          alt={"Photo " + data.title}
        />
        <h2>{data.title}</h2>
      </a>
    </article>
    </div>

    /* <img
        src={data.cover}
        alt={"photo " + data.title}
      /> */
    /* <div className="infos"> */
    /* <h2>{data.title}</h2> */
    /* <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p> */
    /* </div> */
    /* </li> */
  );
};

export default Card;

/* <article class="carte_hebergements">
<a href="#" title="Plus de détails sur cet hébergement">
    <img class="photo_hebergement" src="images/fred-kleber-gTbaxaVLvsg-unsplash.jpg" alt="Photo Hôtel du port">
    <div class="contenu_carte_hebergement">
        <h4>Hôtel du port</h4>
    </div>
</a>
</article> */

/* <article class="carte_hebergements">
<a href="#" title="Plus de détails sur cet hébergement">
    <img class="photo_hebergement" src="images/fred-kleber-gTbaxaVLvsg-unsplash.jpg" alt="Photo Hôtel du port">
    <div class="contenu_carte_hebergement">
        <h4>Hôtel du port</h4>
        <p>Nuit à partir de 52€</p>
        <div>
            <i class="fa-solid fa-star icone_bleu fa-xs"></i>
            <i class="fa-solid fa-star icone_bleu fa-xs"></i>
            <i class="fa-solid fa-star icone_bleu fa-xs"></i>
            <i class="fa-solid fa-star icone_bleu fa-xs"></i>
            <i class="fa-solid fa-star icone_gris fa-xs"></i>
        </div>
    </div>
</a>
</article> */

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
