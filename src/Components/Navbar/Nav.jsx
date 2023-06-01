import React from "react";
import "./styles.css";
/* import { CgGym } from "react-icons/cg"; */

const Nav = () => {
  return (
    <nav className="justify-center sm:justify-around">
      <section>
        <a href="#inicio">
          <img
            src="../../img/logoNombre.jpg"
            alt="Logo de entrenamientos nano"
            width={220}
          />
        </a>
      </section>
     {/*  <button className=" sm:hidden">
        <CgGym
          style={{
            color: "white",
            width: "50px",
            height: "50px",
            marginLeft: "30px",
          }}
        />
      </button> */}
      <section>
        <ul className="hidden sm:block sm:flex sm:flex-row">
        <li>
          <a className="" href="#entrenamientos">
            Entrenamientos
          </a>
        </li>
    {/*     <li>
          <a href="">Programas</a>
        </li> */}
        <li>
          <a href="#about">Sobre mi</a>
        </li>
        <li>
          <a href="#Contact">Contactame</a>
        </li>
      </ul>
      </section>
      
    </nav>
  );
};

export default Nav;
