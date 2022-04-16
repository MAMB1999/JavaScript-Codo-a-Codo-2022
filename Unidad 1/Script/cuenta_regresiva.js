export function cuentaRegresiva() {

    let intervalo;
    document.addEventListener("click", (e) => {
        if (e.target.matches(".boton_calendario")) {
            clearInterval(intervalo);
            let TIEMPOFALTANTE = document.querySelector("#calendario").value || "2022/09/11";
            let $texto = document.querySelector(".contenedor_cuenta_regresiva > p");
            intervalo = setInterval(() => {
                let fechaFaltante = new Date(TIEMPOFALTANTE),
                    fechaActual = new Date(),
                    sg = Math.round((fechaFaltante - fechaActual) / 1000),
                    min = Math.round(sg / 60),
                    hora = Math.round(min / 60),
                    dia = Math.round(hora / 24);
                $texto.innerHTML = `Faltan ${dia} dias, ${hora} horas, ${min} minutos y ${sg} segundos para la fecha indicada: ${TIEMPOFALTANTE}`
            }, 1000);
        }
    });
}
