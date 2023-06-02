import React from "react";
import './styles.css';
import {BsWhatsapp} from "react-icons/bs";

const Wahtsapp =()=>{
    return(<>
    <button className="whatsapp-container">
        <BsWhatsapp style={{width:"100%", height:"100%"}}/>
    </button>
    </>)
}

export default Wahtsapp;