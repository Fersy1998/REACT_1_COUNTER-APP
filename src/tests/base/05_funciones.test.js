import '@testing-library/jest-dom';
import { getActiveUser, getUser } from '../../bases/05_funciones';


describe('pruebas en 05_funciones.js', ()=>{
    test('pruebas al obtener usuario', () => {
        
        const user= getUser();
        expect(user).toMatchObject({
            UID:92378383,
            userName:"Luz2234"
        })
        console.log(user);
    })
    test('pruebas al obtener usuario activo', () => {
        const nombre="Fersy";
        const user= getActiveUser(nombre);
        //expect(user).toMatchObject(usuario)
        expect(user.userName).toBe(nombre);
        console.log(user);
    })

})