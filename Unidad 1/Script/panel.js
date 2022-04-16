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
                if (coordenadasHijo.left > coordenadasPadre.left) {
                    e.preventDefault();
                    xPosition--;
                }
                break;
            //arriba
            case "ArrowUp": 
                if (Math.round(coordenadasHijo.top) > Math.round(coordenadasPadre.top)) {
                    e.preventDefault();
                    yPosition--;
                }
                break;
            //abajo
            case "ArrowDown":
                if (Math.round(coordenadasHijo.bottom) < Math.round(coordenadasPadre.bottom)) {
                    e.preventDefault();
                    yPosition++;
                }
                break;
            //derecha
            case "ArrowRight":
                if (coordenadasHijo.right < coordenadasPadre.right) {
                    e.preventDefault();
                    xPosition++;
                }
                break;
            default:
                break
        }
        elementoHijo.style.transform = `translate(${xPosition * 3}px,${yPosition * 3}px)`
    })
}