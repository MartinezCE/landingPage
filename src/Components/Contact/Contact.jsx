import React, { useState } from "react";
import "./styles.css";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoConsulta, setTipoConsulta] = useState("gurpal");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
  };
  return (
    <div id="Contact"  className="flex flex-col w-full items-center mt-20 mb-20">
      <h2 className="text-center">Contactame</h2>
      <p className="text-center mb-8 mt-8 text-lg">
        Comienza tu viaje hacia un cuerpo más fuerte y en forma hoy mismo.
      </p>

      <div className="card-contact flex flex-row justify-center">
        <form
          className="flex flex-col w-2/4 p-12"
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <section className="flex flex-col items-start  mb-4">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </section>

          <section className="flex flex-col items-start   mb-4">
            <label htmlFor="email">Email:</label>
            <input
              className="border-b border-gray-500 outline-none focus:border-black"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="tumail@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </section>

          <section className="flex flex-col items-start mb-4">
            <label htmlFor="tipo">Tipo de entrenamiento:</label>
            <select
              id="tipo"
              name="tipoConsulta"
              value={""}
              onChange={(e) => setTipoConsulta(e.target.value)}
              required
            >
              <option value=" ">Seleccione un tipo de entrenamiento</option>
              <option value="gurpal">Gurpal</option>
              <option value="personalizado">Personalizado</option>
            </select>
          </section>

          <section className="flex flex-col items-start mb-4">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows={2}
              required
              placeholder="Me gustaria saber tarifas y horarios ..."
            ></textarea>
          </section>

          <button
            className="hover:text-lime-400 hover:border-lime-400"
            type="submit"
            value="Enviar"
          >
            Enviar
          </button>
        </form>
        <div
          className="bg-sky-950 w-2/4 p-12 text"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2>contacto </h2>
          <p className="text-lg mt-6">
            Podes contactarme fácilmente a través de
            <a className="hover:text-teal-500" href="https://www.instagram.com/" target="blank_">
              {" "}
              Instagram (@entrenamientosNano)
            </a>{" "}
            o{" "}
            <a className="hover:text-teal-500" href="https://www.instagram.com/" target="blank_">
              {" "}
              WhatsApp
            </a>{" "}
            . <br></br>
            También podes utilizar el formulario adjunto para
            enviarme un mensaje directamente. <br></br>¡Espero saber que queres empezar tu cambio fisico hoy!"
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
