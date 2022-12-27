import React from "react";
import ImgBotol from "src/assets/img/kemasan-botol.jpeg";
import ImgDepan from "src/assets/img/pabrik-depan.jpeg";
import ImgParkiran from "src/assets/img/pabrik-parkiran.jpeg";
import ImgTank from "src/assets/img/tank.jpeg";

const Galeri: React.FC = () => {
  const images = [ImgBotol, ImgDepan, ImgParkiran, ImgTank];

  return (
    <div data-aos="fade-up" className="w-full grid grid-cols-2 aspect-square">
      {images.map((img, key) => {
        return (
          <div key={key} className="w-full group aspect-square overflow-hidden">
            <img
              src={img}
              className="object-cover aspect-square w-full group-hover:scale-105 transition-all duration-500"
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default Galeri;
