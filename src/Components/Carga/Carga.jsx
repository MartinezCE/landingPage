import React from "react";
import "./style.css";

import Lottie from "lottie-react";
import mancuerna from "../../static/mancuerna.json";
const Carga = () => {
  return (
    <div className="carga-contenedor">
      <div className="carga-lottie">
        <Lottie animationData={mancuerna} loop={true} style={{width:"50%"}} />
    
      </div>
    </div>
  );
};

export default Carga;

