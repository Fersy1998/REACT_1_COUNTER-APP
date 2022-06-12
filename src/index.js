import React from 'react';
import {createRoot} from 'react-dom/client';
//ANTEEEES
//import {ReactDOM} from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css'
const divRoot=createRoot(document.querySelector('#root'));
//ANTEEEES
//const divRoot=document.querySelector('#root');

//divRoot.render(<PrimeraApp saludo="Hello, I´m Zilo" subtitulo='New One for second time 2'/>);

//ANTEEEES
//ReactDOM.render(<CounterApp valor={10}></CounterApp>, divRoot);

divRoot.render(<CounterApp valor={10}></CounterApp>);

