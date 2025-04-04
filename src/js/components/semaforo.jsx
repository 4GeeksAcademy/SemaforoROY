import React from "react";
import { useState } from "react";
import Circulo from "./circulo";




//create your first component
const Semaforo = (props) => {

  const [color, setSelected] = useState('success')


  const handleClick = (val) => {
    setSelected(val)
}



return (
    <div className="m-5 bg-dark tamaño">
      
       
            <div className={`CirculoA ${color ==='success' && 'bg-success'}`} onClick={() => handleClick('success')}><Circulo/></div>
            <div className={`CirculoA ${color ==='luces cortas' && 'bg-warning'}`} onClick={() => handleClick('luces cortas')}><Circulo/></div>
            <div className={`CirculoA ${color ==='luces largas' && 'bg-danger'}`} onClick={() => handleClick('luces largas')}><Circulo/></div>
        
    </div>
)
};

export default Semaforo;