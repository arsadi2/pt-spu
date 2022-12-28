import React from "react";
import Heading from "../Heading";
import Spacer from "../Spacer";

const VisiMisi: React.FC = () => {
  return (
    <div className="px-4 sm:px-16 w-full relative">
      <Spacer />
      <Spacer />
      <div className="w-full flex flex-col items-center">
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
