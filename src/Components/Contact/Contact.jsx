import React, { useState } from "react";
import "./styles.css";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tipoConsulta, setTipoConsulta] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    try {
      if (name != " " && email != " " && message != "" && tipoConsulta != "") {
        const response = await fetch(
          "https://formsubmit.co/ajax/nano-kapo@hotmail.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: name,
              email: email,
              tipoConsulta: tipoConsulta,
              message: message,
            }),
          }
        );

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Mensaje enviado",
            text: "El mensaje fue enviado con exito.",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            willClose: () => {
              setName(" ");
              setEmail(" ");
              setTipoConsulta(" ");
              setMessage(" ");
              setIsLoading(false);
        } 
          });
        } else {
          throw new Error("Error submitting form data.");
        }
      } else {
        Swal.fire({
          icon: "warning",
          title: "Warning",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          text: "Please fill out all required fields",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Un error ocurrio cuando se enviaba el formulario. Por favor conscatarse con eze.cmartinez@gmail.com",
      });
    }
  };

  return (
    <div id="Contact" className="flex flex-col w-full items-center mt-20 mb-20">
      <h2 className="text-center">Contactame</h2>
      <p className="text-center mb-8 mt-8 text-lg">
        Comienza tu viaje hacia un cuerpo más fuerte y en forma hoy mismo.
      </p>

      <div className="card-contact flex flex-row justify-center">
        <form
          className="flex flex-col w-2/4 p-12"
          onSubmit={handleSubmit}
        >
          <section className="flex flex-col items-start  mb-4">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </section>

          <section className="flex flex-col items-start   mb-4">
            <label htmlFor="email">Email:</label>
            <input
              className="border-b border-gray-500 outline-none focus:border-black"
              type="email"
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
              name="tipoConsulta"
              value={tipoConsulta}
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
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              required
              placeholder="Me gustaria saber tarifas y horarios ..."
            ></textarea>
          </section>
          <input type="hidden" name="_captcha" value="false" />
          <button
            className="hover:text-lime-400 hover:border-lime-400"
            type="submit"
            value="Enviar"
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </form>
        <div
          className="bg-sky-950 w-2/4 p-12 text"
        >
          <h2>contacto </h2>
          <p className="text-lg mt-6">
            Podes contactarme fácilmente a través de
            <a
              className="hover:text-teal-500"
              href="https://instagram.com/entrenamientosnano?igshid=MzRlODBiNWFlZA=="
              target="blank_"
            >
              {" "}
              Instagram (@entrenamientosNano)
            </a>{" "}
            o{" "}
            <a
              className="hover:text-teal-500"
              href="https://walink.co/303348"
              target="blank_"
            >
              {" "}
              WhatsApp
            </a>{" "}
            . <br></br>
            También podes utilizar el formulario adjunto para enviarme un
            mensaje directamente. <br></br>¡Espero saber que queres empezar tu
            cambio fisico hoy!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
