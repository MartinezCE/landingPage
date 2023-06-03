import React from "react";
import './styles.css';
import {BsWhatsapp} from "react-icons/bs";

const Wahtsapp =()=>{
    return(<>
    <button className="whatsapp-container">
        <a target="blank_" href="https://walink.co/303348">
             <BsWhatsapp style={{width:"100%", height:"100%"}}/>
        </a>
       
    </button>
    </>)
}

export default Wahtsapp;