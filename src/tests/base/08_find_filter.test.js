import '@testing-library/jest-dom';
import {getHeroById, getHeroByOwner} from '../../bases/08_find_filter';
import heroes from '../../data/heroes'
describe('Pruebas en data Owner', ()=>{
    test('Comprobar ID', () => {
        const id=1;
        
        const heroe=getHeroById(id);
        
        const heroeAEncontrar=heroes.find(h=>h.id=id);
        
        expect(heroe).toEqual(heroeAEncontrar);
        
    
    })

})