import React, { useContext, useEffect, useState } from "react";
import "./Map.css";
import map from "../../img/map.jpg";
import Ping from "../../components/Ping/Ping";
import { ActiveContext } from "../../contexts/Active";

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
      <Ping top={positions[0]} left={positions[1]} id="1">
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
      <Ping top={positions[2]} left={positions[3]} id="2">
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
      <Ping top={positions[4]} left={positions[5]} id="3">
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
      <Ping top={positions[6]} left={positions[7]} id="4">
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
      <Ping top={positions[8]} left={positions[9]} id="5">
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
    </div>
  );
}
