import React from "react";
import Heading from "../Heading";
import ProdukItem from "./ProdukItem";
import { ProdukItemType } from "./ProdukItem/ProdukItem";
import ImgKepitingMas from "src/assets/img/kepiting-mas.jpeg";
import ImgNutrients from "src/assets/img/press-kemasan.jpeg";
import ImgUdangEmas from "src/assets/img/udang-emas.jpeg";
import ImgTigaUdang from "src/assets/img/tiga-udang.jpeg";
import ImgKupu from "src/assets/img/kupu-kupu-mas.jpeg";
import ImgSentana from "src/assets/img/sentana.jpeg";
import Spacer from "../Spacer";

const Produk: React.FC = () => {
  const produk: ProdukItemType[] = [
    {
      img: ImgNutrients,
      name: "Nutrients",
    },
    {
      img: ImgUdangEmas,
      name: "Udang Emas",
    },
    {
      img: ImgTigaUdang,
      name: "Tiga Udang",
    },
    {
      img: ImgKupu,
      name: "Kupu-Kupu Mas",
    },
    {
      img: ImgKepitingMas,
      name: "Kepiting Mas",
    },
    {
      img: ImgSentana,
      name: "Sentana",
    },
  ];

  return (
    <div className="">
      <Spacer />
      <Heading text="Produk Kami" />
      <div className="px-16 grid grid-cols-3 gap-8">
        {produk.map((item, key) => {
          return <ProdukItem item={item} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Produk;
