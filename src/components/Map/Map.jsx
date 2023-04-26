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
      <Ping top={positions[0]} left={positions[1]} id="1" img={book}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad enim porro
        veritatis quisquam unde, eum impedit! Quibusdam veniam corrupti deserunt
        necessitatibus distinctio doloribus? Libero fugit exercitationem
        accusamus eius. Esse similique quasi quibusdam ratione nesciunt libero
        in eos non voluptatem eaque. Vero inventore, quidem quia eveniet rem
        odio non repellat labore reiciendis ex a eaque suscipit sapiente
        assumenda dolor eius laudantium explicabo culpa at autem doloribus saepe
        neque atque? Aspernatur debitis enim quis! Laudantium quos inventore
        porro cum fuga dolorum commodi consequatur exercitationem, dolorem
        excepturi officiis blanditiis deserunt esse fugiat odio nulla illum
        sequi nesciunt ipsum vel! Perspiciatis ad dicta repellendus.
      </Ping>
      <Ping top={positions[2]} left={positions[3]} id="2" img={cafe}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad enim porro
        veritatis quisquam unde, eum impedit! Quibusdam veniam corrupti deserunt
        necessitatibus distinctio doloribus? Libero fugit exercitationem
        accusamus eius. Esse similique quasi quibusdam ratione nesciunt libero
        in eos non voluptatem eaque. Vero inventore, quidem quia eveniet rem
        odio non repellat labore reiciendis ex a eaque suscipit sapiente
        assumenda dolor eius laudantium explicabo culpa at autem doloribus saepe
        neque atque? Aspernatur debitis enim quis! Laudantium quos inventore
        porro cum fuga dolorum commodi consequatur exercitationem, dolorem
        excepturi officiis blanditiis deserunt esse fugiat odio nulla illum
        sequi nesciunt ipsum vel! Perspiciatis ad dicta repellendus.
      </Ping>
      <Ping
        top={positions[4]}
        left={positions[5]}
        id="3"
        img={ecume}
        title="La demeure de Boris Vian"
      >
        Fier propriétaire du magasin aux cadeaux, Boris Vian peut être trouvé à
        jouer à sa trompette rouillée, jouant un son mélodieusement
        assourdissant aux bas-crieurs. Au magasin, on peut trouver beaucoup de
        choses essentiels, telles que les canons à patates, éventres-tomates,
        les ratatines-odeurs et aux chauffes-savates. Cependant, on manque
        toujours des coupe-fritures, et les écorches poulets, donc je suis
        désolé. <br />
        Si vous voulez, vous pouvez acheter tout pour un prix bas de –2000,00$,
        si vous achetez un canon à patates, et pour un prix bas de 300$ par
        l’heure, vous pouvez parler à Boris Vian lui-même, en lui parlant de la
        vie, ou comment il devrait acheter une nouvelle trompette (il ne vous
        écoutera pas, nous avons essayé). N’oubliez pas de lui donner comme
        cadeau une cigarette, sans le tabac. Ou vous pouvez lui donner du tabac,
        mais pas de cigarettes. N’oubliez pas votre reçu ! Même si nous
        n'imprimerons aucun pour vous.
      </Ping>
      <Ping top={positions[6]} left={positions[7]} id="4" img={etranger}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad enim porro
        veritatis quisquam unde, eum impedit! Quibusdam veniam corrupti deserunt
        necessitatibus distinctio doloribus? Libero fugit exercitationem
        accusamus eius. Esse similique quasi quibusdam ratione nesciunt libero
        in eos non voluptatem eaque. Vero inventore, quidem quia eveniet rem
        odio non repellat labore reiciendis ex a eaque suscipit sapiente
        assumenda dolor eius laudantium explicabo culpa at autem doloribus saepe
        neque atque? Aspernatur debitis enim quis! Laudantium quos inventore
        porro cum fuga dolorum commodi consequatur exercitationem, dolorem
        excepturi officiis blanditiis deserunt esse fugiat odio nulla illum
        sequi nesciunt ipsum vel! Perspiciatis ad dicta repellendus.
      </Ping>
      <Ping
        top={positions[8]}
        left={positions[9]}
        id="5"
        img={park}
        title="La demeure d'Albert Camus"
      >
        N’oubliez pas d’explorer la montagne. Si vous prenez la mauvaise
        direction, et que vous vous perdiez avant que le soleil se réveille,
        après son sommeil, vous trouverez une hutte, toujours allumé. Cette
        maison appartient à Albert Camus, homme populaire pour ruiner la bonne
        humeur de tout le monde. Si vous cognez une mélodie de la chanson{" "}
        <i>Je Bois</i>, et, lorsqu’il ouvre la porte, vous tournez trois fois de
        la maison en criant “C’est la belle vie ! Wah! Wah!” vous allez effrayer
        les oiseaux et M. Camus pensera que votre tête a été mal-vissée. Bref,
        après, vous pouvez entrer chez lui, même s’il sera irrité d'avoir un
        inconnu chez soi. Visitez sa bibliothèque de doctrines et études sur la
        théorie de la vie sans importance, et du concept de relativité des
        émotions. Si vous écoutez ses livres avec plus d’attention, vous pouvez
        entendre le narrateur pleurer. Après cette expérience chaleureuse, vous
        allez sortir de sa maison et penser à retrouver son chemin avant que le
        soleil devienne fatigué et ne commence à dormir.
      </Ping>
    </div>
  );
}
