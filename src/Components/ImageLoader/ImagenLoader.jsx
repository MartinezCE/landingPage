import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carga from "../Carga/Carga";

const ImageLoader = ({ children }) => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    AOS.init();

    const cargarImagenes = async () => {
      try {
        const urls = [
          "./img/banner.webp",
          "./img/bodyg.webp",
          "./img/fuerza.webp",
          "./img/fuerza2.webp",
          "./img/grupal.webp",
          "./img/sobremi.webp",
        ];

        const promesasImagenes = urls.map((url) => {
          return new Promise((resolve, reject) => {
            const imagen = new Image();
            imagen.src = url;
            imagen.onload = resolve;
            imagen.onerror = reject;
          });
        });

        // Esperar a que todas las promesas se resuelvan o se rechacen
        await Promise.allSettled(promesasImagenes);
      } catch (error) {
        console.error("Error al cargar las imágenes:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarImagenes();
  }, []);

  if (cargando) {
    return <Carga />;
  }

  return children;
};

export default ImageLoader;
