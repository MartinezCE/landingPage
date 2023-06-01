import React from "react";
import { FaWhatsapp, FaInstagram, FaRegMap } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" p-4 ml-5 mr-5 mt-5 flex flex-row flex-wrap items-start content-center justify-around sm:flex sm:flex-row-reverse sm:items-center">
      <section>
        <ul className="flex flex-col gap-5 justify-center ">
          <li className="flex flex-row items-center gap-5">
            <a href="#entrenamientos">Entrenamientos</a>
          </li>
         {/*  <li className="flex flex-row items-center gap-5">
            <a href="">Programas</a>
          </li> */}
          <li className="flex flex-row items-center gap-5">
            <a href="#about">Sobre mi</a>
          </li>
          <li className="flex flex-row items-center gap-5">
            <a href="#Contact">Contactame</a>
          </li>
        </ul>
      </section>

      <section className=" sm:m-auto m-12">
        <a href="#inicio">
          <img
            src="../../img/logo2.png"
            alt="Logo de entrenamientos nano"
            width={240}
          />
        </a>
      </section>

      <section>
        <ul className="flex flex-col gap-5">
          <a href="https://goo.gl/maps/Dj7phrSsEL5DM1TM9" target="_blank">
            <li className="flex flex-row items-center gap-5">
              <FaRegMap />
              Ubicacion
            </li>{" "}
          </a>
          <a href="" target="_blank">
            <li className="flex flex-row items-center gap-5">
              <FaInstagram />
              Instagram
            </li>{" "}
          </a>{" "}
          <a href="" target="_blank">
            <li className="flex flex-row items-center gap-5">
              <FaWhatsapp />
              Whatssap
            </li>{" "}
          </a>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
