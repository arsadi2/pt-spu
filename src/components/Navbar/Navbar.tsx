import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-tertiary/50 absolute z-50 top-0 w-full backdrop-filter backdrop-blur-sm h-16 flex justify-between items-center px-4 sm:px-16 ">
      <div className="text-white">PT. Sentana Prima Unggul</div>
      <div className="">
        <a
          href="#"
          className="px-2 sm:px-4 py-2 flex justify-center items-center border border-white text-white hover:text-tertiary hover:bg-white transition-all duration-300 "
        >
          Hubungi Kami
        </a>
      </div>
    </header>
  );
};

export default Navbar;
