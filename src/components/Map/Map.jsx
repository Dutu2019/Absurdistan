import React, { useContext, useEffect, useState } from "react";
import "./Map.css";
import map from "../../img/map.jpg";
import Ping from "../../components/Ping/Ping";
import { ActiveContext } from "../../contexts/Active";
import book from "../../img/book.jpg";
import cafe from "../../img/cafe.jpg";
import ecume from "../../img/ecume.jpg";
import etranger from "../../img/etranger.png";
import park from "../../img/park.jfif";

export default function Map(props) {
  const [positions, setPositions] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const activeContext = useContext(ActiveContext);
  const id = props.id;

  // Ping displacement temp fix
  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 1300) {
      setPositions([
        "40%",
        "50%",
        "55%",
        "78%",
        "36%",
        "39%",
        "15%",
        "58%",
        "0%",
        "57%",
      ]);
    } else {
      setPositions([
        "45%",
        "51.5%",
        "60%",
        "79.5%",
        "41%",
        "40.5%",
        "20%",
        "59.5%",
        "5%",
        "58.5%",
      ]);
    }
  }, [windowWidth]);

  return (
    <div className="Map" id={id}>
      <img src={map} alt="World Map" id="mapImg" className="Img" />
      <Ping
        top={positions[0]}
        left={positions[1]}
        id="1"
        img={book}
        title="Le musée National Jean-Sol Pâtre"
      >
        S'il y a une place qui peut bien résumer notre culture, c’est au musée
        National JSP. Jean-Sol Partre est le philosophe favori de tous les
        Absurdistaniens et devrait être celui de tout le monde. Partout nous
        pouvons voir des vêtements, des livres et tout ce qui est associé à lui
        dans les boutiques. Ici, personne ne l’aime pas, même ceux qui ne l’aime
        pas l’aime. Au musée, nous pouvons voir ses idées complètement
        théoriques ainsi que ces livres sur les théories dans lesquelles il
        parle de propos uniquement abstraits. Il y a aussi les enregistrements
        de toutes ses conférences par ses admirateurs trop préoccupés à
        enregistrer au lieu de l’écouter.
      </Ping>
      <Ping
        top={positions[2]}
        left={positions[3]}
        id="2"
        img={cafe}
        title="Water-polo hivernal"
      >
        Aimez-vous le water-polo ? Qu’en pensez-vous du hockey ? Ici, vous
        pourrez découvrir votre vie et vos intérêts et échanger votre culture
        avec la nôtre tout en jouant au hockey avec la tête d’un individu
        chanceux aléatoirement choisi. Ne vous inquiétez pas, tout le monde aura
        la chance d’être choisi et lorsque vous serez éventuellement mort par
        collision sur notre piscine d’hiver à côté du métro
        <i>la station patinoire</i>, alors nos ramasseurs-cadavres et seront
        prêt à agir et faire en sorte que votre expérience soit la plus agréable
        possible. Le water-polo hivernal est sans doute la meilleure façon de
        socialiser et même possiblement de tomber amoureux ?
      </Ping>
      <Ping
        top={positions[4]}
        left={positions[5]}
        id="3"
        img={ecume}
        title="Le théâtre de Eugène Ionesco"
      >
        Eugène Ionesco est une scénariste au studio local dans Absurdistan,
        surnommé <i>Le Chanteur Touffu</i>. Avec l’aide de ses acteurs, il avait
        créé des pièces magnifiques comme <i>La Cantatrice Chauve</i>, qu’on
        présente toujours, vingt-quatre heures sur vingt-quatre, sept jours sur
        sept. Vous aussi, vous pouvez y participer. Aucune mémorisation
        nécessaire ! Vous avez seulement à venir sur la scène et faire quelque
        chose qui n'aurait aucun rapport avec la conversation entre les
        personnages, et quitter ! Comme récompense, vous aurez une tasse de thé
        et une conversation particulière avec Eugène Ionesco lui-même. Après,
        vous pouvez vous asseoir dans le théâtre pour revoir la même histoire
        dans laquelle vous avez participé il y a quelques minutes. Chaque fois
        que vous revoyez cette œuvre, ce sera magnifiquement banal. Avant de
        quitter, prenez soin de ne pas trop rire, et passez par le mini-théâtre
        mélancolique qui montre l’histoire tragique de M. Meursault.
      </Ping>
      <Ping
        top={positions[6]}
        left={positions[7]}
        id="4"
        img={etranger}
        title="La demeure de Boris Vian"
      >
        Fier propriétaire du magasin aux cadeaux, Boris Vian peut être trouvé à
        jouer à sa trompette rouillée, jouant un son mélodieusement
        assourdissant aux bas-crieurs. Au magasin, on peut trouver beaucoup de
        choses essentielles : des canons à patates, des éventres-tomates, des
        ratatines-odeurs et des chauffes-savates. Cependant, on manque toujours
        de coupe-fritures, et des écorche-poulets, donc on est désolé.
        <br />
        Si vous voulez, vous pouvez acheter tout pour un bas prix de –2000,00$
        et pour 300$ de l’heure, vous pouvez parler à Boris Vian lui-même, en
        lui parlant de la vie, ou pourquoi il devrait acheter une nouvelle
        trompette (il ne vous écoutera pas, nous avons essayé). N’oubliez pas de
        lui donner comme cadeau une cigarette, sans le tabac. Ou vous pouvez lui
        donner du tabac, mais pas de cigarettes. N’oubliez pas votre reçu ! Nous
        n'imprimerons aucun pour vous.
      </Ping>
      <Ping
        top={positions[8]}
        left={positions[9]}
        id="5"
        img={park}
        title="La demeure d'Albert Camus"
      >
        N’oubliez pas d’explorer la montagne. Si vous prenez la mauvaise
        direction et que vous vous perdiez avant que le soleil se réveille,
        après son sommeil, vous trouverez une hutte, toujours allumée. Cette
        maison appartient à Albert Camus, homme populaire pour ruiner la bonne
        humeur de tout le monde. Si vous cognez une mélodie de la chanson
        <i>Je Bois</i>, et, lorsqu’il ouvre la porte, vous tournez trois fois
        sur vous-même en criant “C’est la belle vie ! Wah! Wah!”, vous allez
        effrayer les oiseaux et M. Camus pensera que votre tête a été
        mal-vissée. Bref, après, vous pouvez entrer chez lui, même s’il sera
        irrité d'avoir un inconnu chez soi. Visitez sa bibliothèque de doctrines
        et d’études sur la théorie de la vie sans importance, et du concept de
        la relativité des émotions. Si vous écoutez ses livres avec plus
        d’attention, vous pouvez entendre le narrateur pleurer. Après cette
        expérience chaleureuse, vous allez sortir de sa maison et penser à
        retrouver son chemin avant que le soleil devienne fatigué et ne commence
        à dormir.
      </Ping>
    </div>
  );
}
