export function hamburguesa(){
    const element_hamburger = document.querySelector(".hamburger");
    const element_nav = document.querySelector(".contenedor_navegacion");
    element_hamburger.addEventListener("click",() => {
        let r = element_hamburger.classList.toggle("is-active");
        element_nav.classList.toggle("is-active");
    });
}