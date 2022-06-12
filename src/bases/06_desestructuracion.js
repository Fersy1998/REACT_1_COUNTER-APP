const persona={

    nombre:'Fersy',
    apellido:'Martínez',
    edad:24
}

const {nombre, apellido, edad} = persona;


console.log(nombre);
console.log(apellido);
console.log(edad);


const getNombre=({nombre})=>console.log(nombre);

getNombre(persona);


const getContext=({nombre, apellido})=>({
    nombreClave:nombre,
    apellidoClave:apellido

});

const {nombreClave}=getContext(persona);
console.log(nombreClave);
