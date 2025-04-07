import React from "react";
import { useState } from "react";
import Circulo from "./circulo";




//create your first component
const Semaforo = (props) => {

  const [color, setColor] = useState("circuloazul")


  const handleChangeColor = (parametro) => {
    setColor(parametro)
    console.log(parametro)
}



return (
<div className="row">
<div className="col d-flex flex-column align-items-center">

    <div className="mt-5 bg-dark tamaño">
      
       
            {/* <div className={`CirculoA ${color ==='success' && 'bg-success'}`} onClick={() => handleClick('success')}><Circulo/></div>
            <div className={`CirculoA ${color ==='luces cortas' && 'bg-warning'}`} onClick={() => handleClick('luces cortas')}><Circulo/></div>
            <div className={`CirculoA ${color ==='luces largas' && 'bg-danger'}`} onClick={() => handleClick('luces largas')}><Circulo/></div> */}
            <div className={`circulonaranja ${color === "circulonaranja"?"circulonaranja glow":"circulonaranjagris"}`} onClick={() => handleChangeColor('circulonaranja')}></div>
            <div className={`circuloverde ${color === "circuloverde"?"circuloverde glow":"circuloverdegris"}`} onClick={() => handleChangeColor('circuloverde')}></div>
            <div className={`circulorojo ${color === "circulorojo"?"circulorojo glow":"circulorojogris"}`} onClick={() => handleChangeColor('circulorojo')}></div>
           
        
    </div>
    <div className="mt-2 bg-dark tamaño1"> 
    </div>
    </div>
    </div>
)
};

export default Semaforo;