import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import Ras from "../assets/ras.png"

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="Header">
      <Image
        className='icon'
        src={Ras}
        alt="Logo Ras"
        width={131}
        height={54}
      />

      <div onClick={toggleMenu}>
        <div className={openMenu ? "hamburger_active" : "hamburger"} >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {openMenu ? (
        <div className="Menu">
        <Link href="#Inicio" scroll={true} onClick={toggleMenu}>
          <div className="Menu_item_box">
            <h3>Inicio</h3>
          </div>
        </Link>
        <Link href="#Sobre" scroll={true} onClick={toggleMenu}>
          <div className="Menu_item_box">
            <h3>Sobre</h3>
          </div>
        </Link>
        <Link href="#Projetos" scroll={true} onClick={toggleMenu}>
          <div className="Menu_item_box">
            <h3>Projetos</h3>
          </div>
        </Link>
        <Link href="#Membros" scroll={true} onClick={toggleMenu}>
          <div className="Menu_item_box">
            <h3>Equipe</h3>
          </div>
        </Link>
        <Link href="#Contato" scroll={true} onClick={toggleMenu}>
          <div className="Menu_item_box" >
            <h3>Contato</h3>
          </div>
        </Link>
      </div>
      ) : null}
    </div>
  )
}

export default Header;
