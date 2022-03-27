
function button_hover(elemento){
    elemento.disabled === true?
    elemento.addEventListener('mouseenter', () => elemento.style.background = "rgb(114, 31, 31)"):
    elemento.addEventListener('mouseleave', () => elemento.style.background = "rgb(110, 196, 207)");
}
/*Exportamos la funcion iniciaReloj (la funcion recible los nombres de la clase boton y el panel_texto)*/
export function iniciaReloj(botonInicia,botonDetiene,texto){
    /*simplificamos document y creamos una variable intervalo */
    let d = document,
    intervalo;
    /*esperamos que document reciba el evento */
    d.addEventListener("click",(e)=>{
        /*con e podemos señalar el elemento que creo el evento*/
        if(e.target.matches(botonInicia)){
            /*Creamos intervalo */  
            intervalo = setInterval(()=>{
                const hora = new Date();
                d.getElementById(texto).innerHTML = `<p>${hora.toLocaleTimeString()}</p>`;
            },1000);
            /*Deshabilitamos el boton inicia_reloj (asi no lo sigue oprimiendo) */
            e.target.disabled = true;
            /*Cambiamos el background */
            e.target.style.background = "rgb(66, 66, 66)";
        }
        /*Realiza la misma funcion que arriba pero con boton_detiene*/
        if(e.target.matches(botonDetiene)){
            /*Detiene el intervalo */
            clearInterval(intervalo);
            /*Eliminamos el contenido de la etiqueta */
            d.getElementById(texto).innerHTML = null;
            /*Reactivamos el boton */
            d.querySelector(botonInicia).disabled = false;
            /*Cambiamos el background */
            d.querySelector(botonInicia).style.background = "rgb(110, 196, 207)";
        }
    });
}
/*Exportamos la funcion iniciaReloj (la funcion recibe los nombres de la clase boton y el id audio) */
export function iniciaAlarma(botonInicia,botonDetiene,audio){
    /*Creamos variable document y contador */
    let d = document,
    contador;
    /*Esperamos a que document reciba un evento tipo click */
    d.addEventListener("click",(e)=>{

        /*Si el elemento que pulso el evento tiene la clase botonInicia*/
        if(e.target.matches(botonInicia)){
            /*Añadimos un setTimeout (para que tarde 2s)*/
            contador = setTimeout(()=>{
                /*Reproducimos el sonido */
                d.getElementById(audio).play();
            },2000)
            /*Desabilitamos el boton */
            e.target.disabled = true;
            /*Cambiamos el background */ 
            e.target.style.background = "rgb(66, 66, 66)";
        }
        /*Si el elemento que pulso el evento tiene la clase botonDetiene */
        if(e.target.matches(botonDetiene)){
            /*Detenemos el timeout (por si lo presiona antes) */
            clearTimeout(contador);
            /*Habilitamos el boton */
            d.querySelector(botonInicia).disabled = false;
            /*Detiene la alarma */
            d.getElementById(audio).pause();
            /*Cambiamos el background */
            d.querySelector(botonInicia).style.background = "rgb(110, 196, 207)";
        }
    })


}