import React from "react";
import Spacer from "../Spacer";
import ImgLogo from "src/assets/img/logo-spu.png";

const Footer: React.FC = () => {
  return (
    <div className="px-16 relative overflow-hidden">
      <div className="absolute w-[200px] h-[300px] bg-gradient-to-tl from-quinary to-my-yellow skew-y-12 -translate-x-32 -bottom-28 -rotate-[67deg] opacity-50"></div>
      <div className="absolute w-[200px] h-[300px] bg-tertiary skew-y-12 -translate-x-48 -bottom-32  -rotate-[67deg] opacity-80"></div>
      <Spacer />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 border-t border-my-yellow pt-16 z-20">
        <div className="">
          <img src={ImgLogo} alt="logo-spu" />
          <p className="p-4 text-thin">
            Kompleks Pergudangan Permata blok F/1 Tambak Sawah,
            <br />
            Kec. Waru - Kab. Sidoarjo, Jawa Timur
            <br />
            61256
          </p>
        </div>
        <div className="space-y-3 px-4 sm:px-48">
          <div className="">
            <p className="text-sm">Telepon :</p>
            <p className="text-lg font-semibold text-my-yellow">031-8681348</p>
          </div>
          <div className="">
            <p className="text-sm">Fax :</p>
            <p className="text-lg font-semibold text-my-yellow">031-8681309</p>
          </div>
          <div className="">
            <p className="text-sm">Email :</p>
            <p className="text-lg font-semibold text-my-yellow">
              pt_sentanaprimaunggul@yahoo.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-8 text-zinc-900/50">
        &copy; PT. Sentana Prima Unggul 2022
      </div>
    </div>
  );
};

export default Footer;
