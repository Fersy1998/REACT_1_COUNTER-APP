import React from 'react';

import '@testing-library/jest-dom';
import CounterApp from '../../CounterApp';
import {shallow} from 'enzyme';

describe('Pruebas en CounterApp.js', ()=>{
    let wrapper=shallow(<CounterApp />);
    
    beforeEach(()=>{
        wrapper=shallow(<CounterApp />);
    })
       
    test('should match the snapshoot', () => {
        //const valor=100;
        //CounterApp(valor);
        
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should match the snapshoot 100 defect value', () => {
        const valor=100;
        const wrapper=shallow(<CounterApp valor={valor} />);
        const tagh2=wrapper.find('h2').text().trim();
        expect(parseInt(tagh2)).toBe(valor);
    })
    test('should click -1', () => {
        wrapper.find('button').at(0).simulate('click');
        const contador=wrapper.find('h2').text().trim();
        expect(contador).toBe('9');
    })
    test('should click +1', () => {
        wrapper.find('button').at(2).simulate('click');
        const contador=wrapper.find('h2').text().trim();
        expect(contador).toBe('11');
    })
    test('should reset', () => {
        const valor=105;
        const wrapper=shallow(<CounterApp valor={valor} />);
        
        wrapper.find('button').at(2).simulate('click');
        let tagh2=wrapper.find('h2').text().trim();
        console.log(tagh2);
        
        wrapper.find('button').at(2).simulate('click');
        tagh2=wrapper.find('h2').text().trim();
        console.log(tagh2);
        
        wrapper.find('button').at(2).simulate('click');
        tagh2=wrapper.find('h2').text().trim();
        console.log(tagh2);
        
        wrapper.find('button').at(1).simulate('click');
        tagh2=wrapper.find('h2').text().trim();
        console.log(tagh2);
        
        expect(parseInt(tagh2)).toBe(valor);
    })
})