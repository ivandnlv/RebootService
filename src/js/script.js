import header from './modules/header';
import Timer from './modules/timer';
import hamburger from './modules/hamburger';
import sliders from './modules/sliders';
import inputs from './modules/inputs';
import cards from './modules/cards';
import up from './modules/up';
import modals from './modules/modals';
import forms from './modules/forms';
import animations from './modules/animations';

window.addEventListener('DOMContentLoaded', () => {
    header();
    Timer();
    hamburger();
    sliders();
    inputs();
    cards();  
    up();
    modals();
    forms();
    animations();
});

