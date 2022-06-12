import React from 'react';
//import React, {fragment} from 'react';
import PropTypes from 'prop-types';

const PrimeraApp=({ saludo, subtitulo="Soy un subtítulo"})=>{
    const saludoApp =  saludo;
   // console.log(props);
    const persona={
        nombre: "Rosaria",
        apellido:"Yvgnir",
        edad:34
    }
    
    return (   
    <>
    <h1><pre>{/*JSON.stringify(persona, null, 3)*/}{saludoApp}</pre></h1>
    {/*<p>Primera App</p>*/}
    !!!
    <p>{subtitulo}</p>
    </>
    )
}

PrimeraApp.propTypes={
   // props: PropTypes.string.isRequired,
   saludo: PropTypes.string.isRequired,
   subtitulo: PropTypes.string.isRequired,
}
/*
PrimeraApp.defaultProps={
    parrafo: "Soy un parrafo",

}*/
export default PrimeraApp;