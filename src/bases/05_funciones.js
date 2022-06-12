/*

const saludar=function(nombre){
    return `Hola ${nombre}`;
}

const saludar2=(nombre)=> `Hola ${nombre}`;

const saludar3= ()=>"Hola mundo";

console.log(saludar("Sara"));
console.log(saludar2("Sayu"));
console.log(saludar3());



*/
//console.log(getUser());
export const getUser=()=>({
    UID:92378383,
    userName:"Luz2234"
})

//TAREA
function getUsuarioActivo(nombre){
    return {
        UID:243424122,
        userName:nombre
    }
}


///En función tipo flecha  
export const getActiveUser=(nombre)=>(
    {
        UID:243424122,
        userName:nombre
    }
)
/*
console.log(getUsuarioActivo("Fersy"));
console.log(getActiveUser("Fersy"));*/