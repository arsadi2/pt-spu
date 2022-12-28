import React from "react";
import Galeri from "../Galeri";
import Heading from "../Heading";
import Spacer from "../Spacer";

const Tentang: React.FC = () => {
  return (
    <div className="px-24">
      <Spacer />
      <Spacer />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        <div className="">
          <Heading text="Tentang Kami" align="left" />
          <p
            data-aos="fade-right"
            className="font-thin  leading-9 text-justify"
          >
            PT. Sentana Prima Unggul mulai beraktifitas sejak tahun 2006 dengan
            bentuk perusahaan awal sebagai Usaha Dagang (UD). Sesuai dengan
            perkembangan dan regulasi pmerintahan yang berlaku, maka pada
            tanggal Sebelas bulan Februari tahun 2015 (11-02-2015) UD. Sentana
            Prima Unggul berubah menjadi Persero Terbatas (PT) dengan Akta
            Notaris N. Made Suta, S.H., M.M. yang berkedudukan di Surabaya,
            dengan Akta No. 1 Tanggal 11 Februari 2015, dan telah disahkan oleh
            Menteri Hukum dan Hak Asasi Manusia Republik Indonesia dengan SK No.
            AHU - 0006951.AH.0101 Tahun 2015. Permintaan pasar akan minyak
            goreng terus meningkat, hal ini dikarenakan minyak goreng merupakan
            salah satu kebutuhan pokok yang selalu digunakan oleh masyarakat.
            Oleh karena itu, perusahaan tetap ingin ikut serta dalam penyediaan
            minyak goreng dalam berbagai kemasan, dengan harga yang terjangkau
            dan kualitas yang terbaik.{" "}
          </p>
        </div>
        <Galeri />
      </div>
    </div>
  );
};

export default Tentang;
