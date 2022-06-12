import '@testing-library/jest-dom';
import { getImagen } from '../../bases/11_async_await';

describe('Tests getting Image', ()=>{
    test('should return an url image', async() => {
        
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
        //expect(includes 'https://').toBe(true);
    })

})