import '@testing-library/jest-dom';
import { getHeroByIdAsync } from '../../bases/09_promesas';


describe('pruebas en 09_promesas.js', ()=>{
    test('should retorn hero async', (done) => { 
        const id=2;
        getHeroByIdAsync(id)
        .then(res=>{
            expect(res.id).toEqual(id);
            console.log(res);
            done();
        });
       
    
    })
    test('should retorn an error async', (done) => { 
        const id=22;
        getHeroByIdAsync(id)
        .catch(res=>{
            expect(typeof res).toBe('string');
            console.log(res);
            done();
        });
       
    
    })


})
