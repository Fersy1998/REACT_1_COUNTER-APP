const stateUser=(valor)=>{
    return [valor, ()=>console.log("Hola Mundo")];
}
//TAREA
//Nombre = valor; SetNombre=funcion


const [nombre, setNombre]=stateUser("Fersy");

//console.log(nombre);

export const retornaArreglo=()=>{
    return ['ABC', 123];

}

setNombre();