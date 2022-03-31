export function relojControl() {
    /*Funcion que detecta el evento "click" de 4 botones, los primeros 2 (inicia_reloj y detiene_reloj) se encargan del arranque del mismo
    La segunda condicion principal se encarga de manejar los botones (inicia_alarma y detiene_alarma)
    *Cuando las variables tienen el prefijo "$" significa que son elementos del dom*/
    let d = document,
    INTERVALO;
    d.getElementById("botones_reloj").addEventListener("click", (e) => {
        if (e.target.matches(".inicia_reloj") || e.target.matches(".detiene_reloj")) {
            //variables
            const $texto = d.getElementById("reloj"),
            $botonIniciaReloj = d.querySelector(".inicia_reloj");
            if (e.target.matches(".inicia_reloj")) {
                INTERVALO = setInterval(() => {
                    const hora = new Date();
                    $texto.innerHTML = hora.toLocaleTimeString();
                }, 1000);
                $texto.style.color = "rgb(255, 255, 255)";
                e.target.disabled = true;
                e.target.style.background = "rgb(66, 66, 66)";
            }
            if(e.target.matches(".detiene_reloj")) {
                clearInterval(INTERVALO);
                $texto.style.color = "rgb(121, 121, 121)";
                $botonIniciaReloj.disabled = false;
                $botonIniciaReloj.style.background = "rgb(112, 165, 226)";
            }
        } else {
            //variables
            let CONTADOR;
            const $botonIniciaAlarma = d.querySelector(".inicia_alarma"),
            $audio = d.getElementById("audio");
            if (e.target.matches(".inicia_alarma")) {
                CONTADOR = setTimeout(() => {
                    $audio.play();
                }, 2000);
                e.target.disabled = true;
                e.target.style.background = "rgb(66, 66, 66)";
            }
            if(e.target.matches(".detiene_alarma")){
            clearTimeout(CONTADOR);
            $botonIniciaAlarma.disabled = false;
            $audio.pause();
            $botonIniciaAlarma.style.background = "rgb(112, 165, 226)";
            }
        }
    })
}