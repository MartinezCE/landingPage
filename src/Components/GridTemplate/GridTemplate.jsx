import React from "react";
import "./styles.css";

const GridTemplate = () => {
  return (
    <div id="entrenamientos" className="grid-container">
      <div
        className="item1 grayscale hover:grayscale-0  "
        data-aos="fade-right"
      >
        <div className="capa-superior-grid" />
        <h2>Perzonalizado</h2>
        <div className="grid-container-text">
          <p className="text-center p-2">
            Un programa diseñado específicamente para vos, teniendo en cuenta tus
            metas, nivel de condición física actual y cualquier restricción o
            lesión.<br></br> Asesoramiento individualizado de nuestros entrenadores
            expertos para asegurarte de realizar los ejercicios correctamente y
            maximizar tus resultados.<br></br>  Seguimiento de tu progreso y ajustes
            regulares en tu plan de entrenamiento para garantizar que sigas
            avanzando hacia tus metas.
          </p>
        </div>
      </div>

      <div className="item2 grayscale hover:grayscale-0 " data-aos="fade-right">
        <div className="capa-superior-grid" />
        <h2>Grupal</h2>
        <div className="grid-container-text ">
          <p className="text-center p-2 text-lg">
            Motivación y apoyo de un grupo de personas con objetivos similares.<br></br> 
            Dinámicas de grupo que te mantendrán motivado/a y comprometido/a con
            tu entrenamiento.<br></br>  Precios más accesibles en comparación con el
            entrenamiento personalizado individual, sin sacrificar la calidad y
            la atención.
          </p>
        </div>
      </div>

      <div
        id="about"
        className="item3 grayscale hover:grayscale-0 "
        data-aos="fade-left"
      >
        <div className="capa-superior-grid" />
        <h2>Sobre mi</h2>
        <div className="grid-container-text ">
          <p className="text-center p-2 text-lg">
            En entrenamientos Nano, nos apasiona ayudar a las personas a lograr
            sus objetivos de fitness y mejorar su calidad de vida. Nuestro
            enfoque se centra en brindar entrenamiento personalizado y grupal
            que se adapta a tus necesidades individuales, con un énfasis
            especial en el entrenamiento de cuerpo completo y la construcción de
            fuerza.
          </p>
          <h2>¿Por que elegirnos?</h2>
          <p className="text-center p-2 text-lg">
            Equipo de entrenadores altamente calificados y certificados, con
            amplia experiencia en entrenamiento personalizado y grupal. Entorno
            amigable y motivador que te ayudará a mantener el compromiso y la
            dedicación. Flexibilidad de horarios para adaptarse a tu agenda
            ocupada.Resultados probados y testimonios de clientes satisfechos
            que han alcanzado sus metas con nuestro programa de entrenamiento.
          </p>
        </div>
      </div>

      <div
        className="item4 grayscale hover:grayscale-0"
        data-aos="fade-up-right"
      >
        <div className="capa-superior-grid" />
        <h2>Strength training</h2>
        <div className="grid-container-text">
          <p className="text-center p-2 text-lg">
            Enfocado en aumentar tu fuerza y potencia muscular. <br></br>  Utiliza técnicas
            de levantamiento de pesas y ejercicios compuestos.<br></br>  Desarrolla
            músculos fuertes y tonificados. <br></br> Mejora tu rendimiento en otras
            actividades físicas y deportes.
          </p>
        </div>
      </div>

      <div className="item5 grayscale hover:grayscale-0 " data-aos="flip-up">
        <div className="capa-superior-grid" />
        <h2>Full body</h2>
        <div className="grid-container-text">
          <p className="text-center p-2 text-lg">
            Trabaja todos los grupos musculares en una sola sesión de
            entrenamiento. <br></br> Maximiza la eficiencia y optimiza tu tiempo en el
            gimnasio. Desarrolla una base sólida de fuerza y resistencia en todo
            tu cuerpo.<br></br>  Programas adaptados a diferentes niveles de condición
            física, desde principiantes hasta atletas avanzados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridTemplate;
