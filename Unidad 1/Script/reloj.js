export function iniciaReloj(botonInicia,botonDetiene,texto){
    let d = document,
    intervalo;
    document.addEventListener("click",(e)=>{
        if(e.target.matches(botonInicia)){
            intervalo = setInterval(()=>{
                const hora = new Date();
                d.getElementById(texto).innerHTML = `<p>${hora.toLocaleTimeString()}</p>`;
            },1000);
            e.target.disabled = true;
        }
        if(e.target.matches(botonDetiene)){
            clearInterval(intervalo);
            d.getElementById(texto).innerHTML = null;
            d.querySelector(botonInicia).disabled = false;
        }
    });
}
export function iniciaAlarma(botonInicia,botonDetiene,audio){
    let d = document,
    contador;
    d.addEventListener("click",(e)=>{
        if(e.target.matches(botonInicia)){
            contador = setTimeout(()=>{
                d.getElementById(audio).play();
            },2000)
            console.log("reproduciendo");
            
            e.target.disabled = true;
        }
        if(e.target.matches(botonDetiene)){
            clearTimeout(contador);
            d.querySelector(botonInicia).disabled = false;
            d.getElementById(audio).pause();
        }
    })


}