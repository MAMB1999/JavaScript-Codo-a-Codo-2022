import { iniciaReloj,iniciaAlarma } from "./reloj.js";
import {hamburguesa} from "./hamburguer.js"
//Hamburguesa
hamburguesa();
/*Maneja el reloj */
iniciaReloj(".inicia_reloj",".detiene_reloj","panel_reloj");
/*Maneja la alarma */
iniciaAlarma(".inicia_alarma",".detiene_alarma","audio");
