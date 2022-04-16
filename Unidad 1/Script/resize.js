
export function resizeScreen(){
    let breakpoint = window.matchMedia("(min-width:1024px)"),
    contenedor = document.getElementById("contenido_responsive");

    const resize = (e)=>{
        if(e.matches){
            contenedor.textContent = "Contenido Escritorio";
        }else{
        
            contenedor.textContent = "Contenido Movil";
        }
    }
    breakpoint.addListener(resize);
    resize(breakpoint);

}