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
          <p className="text-center p-2 sm:text-lg">
            Un programa diseñado específicamente para vos, teniendo en cuenta
            tus metas, nivel de condición física actual y cualquier restricción
            o lesión.<br></br> Asesoramiento individualizado de nuestros
            entrenadores expertos para asegurarte de realizar los ejercicios
            correctamente y maximizar tus resultados.<br></br> Seguimiento de tu
            progreso y ajustes regulares en tu plan de entrenamiento para
            garantizar que sigas avanzando hacia tus metas.
          </p>
        </div>
      </div>

      <div className="item2 grayscale hover:grayscale-0 " data-aos="fade-right">
        <div className="capa-superior-grid" />
        <h2>Grupal</h2>
        <div className="grid-container-text ">
          <p className="text-center p-2 sm:text-lg">
            Motivación y apoyo de un grupo de personas con objetivos similares.
            <br></br>
            Dinámicas de grupo que te mantendrán motivado/a y comprometido/a con
            tu entrenamiento.<br></br> Precios más accesibles en comparación con
            el entrenamiento personalizado individual, sin sacrificar la calidad
            y la atención.
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
          <p className="text-center p-2 sm:text-lg">
            Soy Juan Manuel Della Salla, Profesor de Educación Física, egresado
            en el I.S.C.J . <br />
            Preparador Físico y Entrenador Personal. <br />
            Me dedico a realizar rutinas diseñadas específicamente a las
            necesidades individuales de cada alumno ofreciendo una amplia
            variedad de herramientas, acompañándote en el proceso para que
            logres tu mejor versión.l en el entrenamiento de cuerpo completo y
            la construcción de fuerza.
          </p>
          <h2>¿Por que elegirnos?</h2>
          <p className="text-center p-2 sm:text-lg">
            Entorno amigable y motivador que te ayudará a mantener el compromiso
            y la dedicación. Flexibilidad de horarios para adaptarse a tu agenda
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
          <p className="text-center p-2 sm:text-lg">
            Es un sistema de entrenamiento de fuerza y acondicionamiento basado
            en ejercicios funcionales constantemente variados de alta
            intensidad. Mejorando notablemente la capacidad cardiovascular,
            resistencia, fuerza, flexibilidad, potencia, velocidad,
            coordinación, agilidad, equilibrio y precisión. Utilizamos diversas
            técnicas y movimientos aplicables a la vida diaria que se pueden
            adaptar a cualquier persona, independientemente de su edad, sexo,
            capacidades o experiencia previa. Nuestro compromiso es trabaja en
            niveles de intensidad que se adapten a cada individuo, adaptando
            cargas; tiempo y volumen acorde del objetivo personal.
          </p>
        </div>
      </div>

      <div className="item5 grayscale hover:grayscale-0 " data-aos="flip-up">
        <div className="capa-superior-grid" />
        <h2>Full body</h2>
        <div className="grid-container-text">
          <p className="text-center p-2 sm:text-lg">
            Entrenamientos que involucran el cuerpo en su totalidad, activando
            una gran cantidad de músculos en simultáneo; a diferencia de un
            gimnasio convencional, es un entrenamiento muy dinámico y fluido.{" "}
            <br />
            Con esta modalidad de trabajo se incrementa el gasto calórico,
            aumenta la capacidad cardiovascular, mejora la fuerza, la potencia y
            la flexibilidad en busca de cumplir tus objetivos. <br />
            Los mismos se adaptan acorde al nivel; inicialy avanzado de forma
            progresiva garantizando tu evolución.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridTemplate;
