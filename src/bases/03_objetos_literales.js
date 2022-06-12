const persona={

    nombre:'Fersy',
    apellido:'Martínez',
    direccion:{
        pais:'Honduras',
        ciudad:'Comayagua',
        lat: 15.1453,
        ltd: 84.1345
    },
    telefono:'87658988'
}

console.log(persona);

console.log(persona.apellido);


let persona2={...persona};

persona2.nombre='Sara';

console.table(persona2);
console.table(persona);

