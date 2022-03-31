let xPosition = 0,
    yPosition = 0;

export function tecladoControl() {
    document.addEventListener("keydown", (e) => {

        let contenedorPadre = document.getElementById("contenedor_panel"),
            elementoHijo = document.getElementById("controles_panel"),
            coordenadasPadre = contenedorPadre.getBoundingClientRect(),
            coordenadasHijo = elementoHijo.getBoundingClientRect();
            switch (e.key) {
            //izquierda
            case "ArrowLeft":
                e.preventDefault();
                if(coordenadasHijo.left > coordenadasPadre.left) xPosition--;
                break;
            //arriba
            case "ArrowUp":
                e.preventDefault();
               
                if(Math.floor(coordenadasHijo.top ) >= Math.floor(coordenadasPadre.top)) yPosition--;
                break;
            //abajo
            case "ArrowDown":
                e.preventDefault();
                if(Math.floor(coordenadasHijo.bottom) <= Math.floor(coordenadasPadre.bottom)) yPosition++;
                break;
            //derecha
            case "ArrowRight":
                e.preventDefault();
                if(coordenadasHijo.right < coordenadasPadre.right) xPosition++;
                break;
            default:
            break
    }
        elementoHijo.style.transform = `translate(${xPosition * 3}px,${yPosition * 3}px)`
    })
}