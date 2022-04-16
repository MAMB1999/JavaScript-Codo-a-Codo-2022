import { relojControl} from "./reloj.js";
import { hamburguesa } from "./hamburguer.js";
import {tecladoControl} from "./panel.js";
import {cuentaRegresiva} from "./cuenta_regresiva.js";
import {resizeScreen} from "./resize.js";
import {responsiveTest} from "./responsiveTest.js"
window.addEventListener("DOMContentLoaded",(e)=>{
    //Hamburguesa
    hamburguesa();
    /*Maneja el reloj y alarma mediante un ejercicio */
    relojControl();
    //Maneja el teclado mediante un ejercicio
    tecladoControl();
    //Maneja la cuenta regresiva
    cuentaRegresiva();
    //Maneja Responsive test
    responsiveTest()
})
resizeScreen();

