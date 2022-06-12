import {getSaludo} from '../../bases/02_const_string'
import '@testing-library/jest-dom';


describe('Pruebas en 02_cost_string.js', ()=>{
    test('Pruebas en el método getSaludo', () => {
        const nombre="Fersy";
        const saludo=getSaludo(nombre);
        console.log(saludo);
        expect(saludo).toBe('Hola '+nombre);
        
        
    })
    test('Pruebas en el método getSaludo sin nombre', () => {
        const saludo=getSaludo();
        console.log(saludo);
        expect(saludo).toBe('Hola Carlos!');
        
        
    })

})