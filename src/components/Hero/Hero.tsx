import { CaretDoubleDown } from "phosphor-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="h-[500px] bg-gray-500 bg-hero bg-center bg-no-repeat bg-cover relative w-full">
      <div className="absolute z-10 w-full h-full flex flex-col gap-2 sm:gap-5 items-center justify-center p-2">
        <h1
          data-aos="fade-up"
          className="uppercase text-4xl sm:text-6xl font-bold text-center"
        >
          PT. Sentana Prima Unggul
        </h1>
        <p data-aos="fade-up" className="text-my-yellow text-lg text-center">
          Produsen minyak goreng berkualitas dan mutu terjamin.
        </p>
      </div>
      <span className="w-full h-full absolute bg-gradient-to-t from-my-black to-my-black/40"></span>
      <div className="absolute bottom-0 flex justify-center items-center  w-full">
        <CaretDoubleDown
          size={32}
          color="#D2A810"
          className="absolute bottom-16 animate-bounce mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
