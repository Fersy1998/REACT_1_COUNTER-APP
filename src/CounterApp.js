import React, {useState} from 'react';
import PropTypes from 'prop-types';
const CounterApp=({valor=10})=>{
    
    //const [nombre, setNombre]=useState("Sara");
    
    const [numeroH, setNumeroH]=useState(valor);
    
   // console.log(0);
    //console.log(nombre, setNombre);
    /*
    const handled=(e)=>{
        console.log(e)
    }
    const handled2=(e)=>{
        setNumeroH(numeroH+1);
        console.log(numeroH);
    }
    */
    const handledSubstract=(e)=>{
        setNumeroH(numeroH-1);
    }
    const handledReset=(e)=>{
        setNumeroH(valor);
    }
    const handledAdd=(e)=>{
        setNumeroH(numeroH+1);
    }
    return (
        <>
        <h1>CounterApp</h1>
        <h2> { numeroH } </h2>
        
        
        <button onClick={handledSubstract}>-1</button>
        <button onClick={handledReset}>Reset</button>
        <button onClick={handledAdd}>+1</button>
        </>
    )

}


CounterApp.propTypes={
    valor: PropTypes.number
}

export default CounterApp;
