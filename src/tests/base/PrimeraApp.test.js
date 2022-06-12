import React from 'react';


//import {createRoot} from 'react-dom/client';
//import { getByAltText, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrimeraApp from '../../PrimeraApp';
import {shallow} from 'enzyme';
describe('pruebas en la primera APp.js', ()=>{
    /*
    test('should say if App is lacking something! "Hello, I´m Fersy"', () => {
        const saludo="Hello, I´m Fersy";
        const subtitulo="New One";
        //const wrapper= render(<PrimeraApp saludo={saludo} subtitulo="subtitulo"/>)
        const {getByText}=render(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />)
        console.log(getByText);
        expect(getByText(saludo)).toBeInTheDocument();
    
    
    
    })*/
    test('should say if App is lacking something new! "Hello, I´m Fersy"', () => {
        const saludo="Hello, I´m Fersy 23";
        const subtitulo="New One for third time";
        const wrapper=shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);
        console.log(wrapper);
        
        //const divRoot=createRoot(document.querySelector('#root'));
        //divRoot.render(wrapper);

        expect(wrapper).toMatchSnapshot();
    
    })
    
    test('should see the <p></p>', () => { 
        const saludo="Hello, I´m Fersy 23";
        const subtitulo="New One for third time";
        const wrapper=shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);
        console.log(wrapper);
        const textoParrafo=wrapper.find('p').text();
        //expect(wrapper).toMatchSnapshot();
        console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitulo);
    
    })
    
})