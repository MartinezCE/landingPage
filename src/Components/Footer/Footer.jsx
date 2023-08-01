import React from "react";
import { FaWhatsapp, FaInstagram, FaRegMap } from "react-icons/fa";
import './styles.css'


const Footer = () => {
  return (
    <footer className="footer p-4 ml-5 mr-5 mt-5 flex flex-row flex-wrap items-start content-center justify-around sm:flex sm:flex-row-reverse sm:items-center">
      <section className="secciones">
        <ul className="flex flex-col gap-5  justify-center" >
        
          <li className="flex flex-row items-center gap-5">
            <a href="#Personalizado">Personalizado</a>
          </li>
          <hr style={{width: "100dvw", height: "1px", border: "none", backgroundColor: "grey"}} />

          <li className="flex flex-row items-center gap-5">
            <a href="#Grupal">Grupal</a>
          </li>
          <hr style={{width: "100dvw", height: "1px", border: "none", backgroundColor: "grey"}} />

          <li className="flex flex-row items-center gap-5">
            <a href="#FullBody">Full body</a>
          </li>
          <hr style={{width: "100dvw", height: "1px", border: "none", backgroundColor: "grey"}} />

          <li className="flex flex-row items-center gap-5">
            <a href="#StrengthTraining">Strength training</a>
          </li>
          <hr style={{width: "100dvw", height: "1px", border: "none", backgroundColor: "grey"}} />

          <li className="flex flex-row items-center gap-5">
            <a href="#about">Sobre mi</a>
          </li>
          <hr style={{width: "100dvw", height: "1px", border: "none", backgroundColor: "grey"}} />

          <li className="flex flex-row items-center gap-5">
            <a href="#Contact"> Contactame</a>
          </li>
          <hr style={{width: "100dvw", height: "1px", border: "none", backgroundColor: "grey"}} />

        </ul>
      </section>

      <section className="logo sm:m-auto m-12">
        <a href="#inicio">
          <img
            src="../../img/logo2.png"
            alt="Logo de entrenamientos nano"
            width={240}
          />
        </a>

        <ul className=" gap-5">
          <a href="https://goo.gl/maps/Dj7phrSsEL5DM1TM9" target="_blank">
            <li className="flex flex-row-reverse items-center gap-5">
              <FaRegMap style={{ width: '30px', height: '30px' }} />
             
            </li>{" "}
          </a>


          <a href="https://instagram.com/entrenamientosnano?igshid=MzRlODBiNWFlZA==" target="_blank">
            <li className="flex flex-row-reverse items-center gap-5">
              <FaInstagram style={{ width: '30px', height: '30px' }} />
             
            </li>{" "}
          </a>{" "}
   

          <a href="https://walink.co/303348" target="_blank">
            <li className="flex flex-row-reverse items-center gap-5">
              <FaWhatsapp style={{ width: '30px', height: '30px' }}/>
             
            </li>{" "}
          </a>
        </ul>
      </section>

      <section className="icons">
        <ul className=" gap-5">
          <a href="https://goo.gl/maps/Dj7phrSsEL5DM1TM9" target="_blank">
            <li className="flex flex-row-reverse items-center gap-5">
              <FaRegMap style={{ width: '30px', height: '30px' }} />
             
            </li>{" "}
          </a>


          <a href="https://instagram.com/entrenamientosnano?igshid=MzRlODBiNWFlZA==" target="_blank">
            <li className="flex flex-row-reverse items-center gap-5">
              <FaInstagram style={{ width: '30px', height: '30px' }} />
             
            </li>{" "}
          </a>{" "}
   

          <a href="https://walink.co/303348" target="_blank">
            <li className="flex flex-row-reverse items-center gap-5">
              <FaWhatsapp style={{ width: '30px', height: '30px' }}/>
             
            </li>{" "}
          </a>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
