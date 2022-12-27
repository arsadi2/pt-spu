import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-zinc-900/10 absolute z-50 top-0 w-full backdrop-filter backdrop-blur-sm h-16 flex justify-between items-center px-16 ">
      <div className="">PT. Sentana Prima Unggul</div>
      <div className="">
        <a
          href="#"
          className="px-4 py-2 border border-my-yellow hover:text-white hover:bg-my-yellow transition-all duration-300"
        >
          Hubungi Kami
        </a>
      </div>
    </header>
  );
};

export default Navbar;
