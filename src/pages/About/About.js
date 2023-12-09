import React from "react";
import Collapse from "../../components/Collapse/Collapse";
import picture from "../../assets/IMG_about.png";
import Banner from "../../components/Banner/Banner";

/**Définition de la hauteur de l'image du composant Banner */
const aboutbannerheight = 223;

function About() {
  return (
    <main className="about">
      <Banner src={picture} height={aboutbannerheight} />
      <section className="about__collapse">
        <article>
          <Collapse label="Fiabilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </Collapse>
        </article>
        <article>
          <Collapse label="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Collapse>
        </article>
        <article>
          <Collapse label="Service">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </Collapse>
        </article>
        <article>
          <Collapse label="Sécurité">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Collapse>
        </article>
      </section>
    </main>
  );
}

export default About;
