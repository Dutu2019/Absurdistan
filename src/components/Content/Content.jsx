import React from "react";
import "./Content.css";
import Map from "../Map/Map";
import ContentSection from "../ContentSection/ContentSection";

export default function Content() {
  return (
    <div className="Content">
      <div className="subtitle">Bienvenue!</div>
      <ContentSection id="0">
        Vous êtes sûrement allés en vacances quelque part d’exotique, mais rien
        ne se compare au fameux Absurdistan. Des plats de caoutchouc, des
        maisons déformées, des parcs d’attraction sans émotions, le tout joué
        sur du Wagner n’est que la surface de ce monde fantaisiste. Sur
        seulement une surface d’un km<sup>2</sup>, on y retrouve une expérience
        époustouflante pleine d’éléments irrationnels. Vous pourriez aussi faire
        connaissance avec les trois fondateurs de cette île : Boris Vian, Albert
        Camus et Eugene Ionesco. Pour seulement √(-200)$, vous hébergeriez
        pendant une semaine à l’hôtel <i>Dormez-pas</i>, où on vous réveillera à
        chaque heure pendant la nuit en cognant à votre porte. Visiter la maison
        de Chick, ou se balader sur l’accueil-navires ? La décision n’est qu’à
        vous.
      </ContentSection>
      <div className="subtitle">Carte</div>
      <Map id="1" />
      <div className="subtitle">Attention!</div>
      <ol>
        <li>
          <ContentSection sectionId="2" id="6">
            Prenez bien soin d’apporter vos outils nécessaires, car vous n'en
            aurez probablement pas besoin. Apportez votre météocalcutaleur,
            parce que les nuages sont toujours de mauvaise humeur. Apportez
            votre carte ou une boussole, pour vous aider à vous perdre et
            visiter les artistes mélancoliques tels M. Camus. Apportez des
            collations et des boissons lorsque vous arrêtez aux restaurants, et
            régalez des saveurs aromatisées offerts tels le caoutchouc brûlé ou
            le fromage saturé avec de la peinture jaune. En fait, laissez tout
            cela chez vous et venez à la boutique d’Absurdistan, ou vous ne
            pouvez pas acheter un météocalculeur, mais vous pouvez vous procurer
            d’un repasse-limace, ou d’un tabouret à glace.
          </ContentSection>
        </li>
        <li>
          <ContentSection sectionId="3" id="7">
            Prenez le temps de vous réveiller à trois heures du matin. Si vous
            réussissez de vous réveiller à cette heure, félicitations ! C’est à
            cette heure magique que vous pouvez observer des phénomènes
            surprenants, comme des horreurs boréales, un spectacle de la Nature
            elle-même, durant lesquelles vous pouvez voir des lumières dans le
            ciel. Vous allez être illuminés par cette performance, et vous
            pouvez même trouver une nouvelle signification à votre vie (à moins
            que vous ayez déjà visité M. Camus). Ce spectacle sera disponible
            tous les jours, sauf les mardis, parce que la Nature prend des cours
            de danse.
          </ContentSection>
        </li>
        <li>
          <ContentSection sectionId="4" id="8">
            Ne venez même pas ici. Courez, sortez d’ici, ne pensez pas à rester
            à Absurdistan. Si vous avez pris le bus pour venir ici, sortez du
            bus immédiatement et courez par le chemin opposé. Si vous venez par
            vol, demandez au pilote d’atterrir l’avion et sortez. Si vous
            marchez ici, arrêtez-vous, et courez chez vous, parce que si vous
            décidez de rester ici, vous n’allez jamais quitter notre magnifique
            ville d’Absurdistan !
          </ContentSection>
        </li>
      </ol>
    </div>
  );
}
