import React from "react";
import Heading from "../Heading";
import Spacer from "../Spacer";
import { Heartbeat, Star, Archive } from "phosphor-react";

const VisiMisi: React.FC = () => {
  return (
    <div className=" w-full relative">
      <div className="absolute w-[200px] h-[300px] bg-tertiary skew-y-12 -translate-x-44 top-64 -rotate-12"></div>
      <div className="absolute w-[200px] h-[300px] bg-tertiary -skew-y-12 -translate-x-44 top-[548px] rotate-12"></div>
      <div className="absolute w-[200px] h-[300px] bg-tertiary -skew-y-12 translate-x-44 top-64 right-0 rotate-12"></div>
      <div className="absolute w-[200px] h-[300px] bg-tertiary skew-y-12 translate-x-44 top-[548px] right-0 -rotate-12"></div>
      <div
        data-aos="flip-left"
        className="absolute top-72 flex flex-col items-center justify-center w-[1200px] overflow-hidden  "
      >
        <Star size={128} className="text-my-yellow blur-sm opacity-20" />
        <Heartbeat
          size={96}
          className="text-my-yellow blur-sm -translate-x-56 mt-48 rotate-45 opacity-20"
        />
        <Archive
          size={256}
          className="text-my-yellow blur-sm translate-x-56 mt-48 -rotate-12 opacity-20"
        />
      </div>
      <Spacer />
      <Spacer />
      <div className="w-full flex flex-col items-center px-4 sm:px-16">
        <Heading text="Visi" />
        <p
          data-aos="fade-down"
          className="w-2/3 text-justify sm:text-center text-base sm:text-xl leading-9 font-thin"
        >
          Menjadi perusahaan pengemas minyak goreng kelapa sawit yang
          mengutamakan kualitas prima untuk pelanggannya dengan memberikan
          pelayanan yang terbaik dan optimal sesuai dengan keinginan pelanggan
          disertai perbaikan yang berkelanjutan.
        </p>
        <Spacer />

        <Heading text="Misi" />
        <p
          data-aos="fade-down"
          className="w-2/3 text-justify sm:text-center text-base sm:text-xl leading-9 font-thin"
        >
          Memberikan kepuasan kepada pelanggan dengan hasil produk yang
          berkualitas melalui pengemasan minyak goreng kelapa sawit secara
          modern, untuk menghasilkan mutu dan kualitas yang terjamin.
        </p>
        <Spacer />

        <Heading text="Tujuan" />
        <p
          data-aos="fade-down"
          className="w-2/3 text-justify sm:text-center text-base sm:text-xl leading-9 font-thin"
        >
          Sebagai perusahaan pengemasan minyak goreng sawit, PT. Sentana Prima
          Unggul mampu memberikan pelayanan dan mengutamakan kualitas produk
          yang terbaik karena didukung oleh Mesin Packaging Automatic serta SDM
          yang mumpuni dibidang ini, ketepatan waktu dan kualitas produk bermutu
          adalah komitmen yang paling utama.
        </p>
      </div>
    </div>
  );
};

export default VisiMisi;
