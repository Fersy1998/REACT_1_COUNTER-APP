import { retornaArreglo } from "../../bases/07_deses_arreglos";
import '@testing-library/jest-dom';

describe('pruebas en el archivo 07_des_arreglos.js', ()=>{
    test('Prueba getArreglo ', () => { 
        const [letras, numeros]=retornaArreglo();
        
        expect(typeof letras).toBe('string');
    
    })

})