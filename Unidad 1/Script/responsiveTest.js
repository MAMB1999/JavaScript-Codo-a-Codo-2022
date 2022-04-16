export function responsiveTest(){
    let $id = document.getElementById("responsive_form"),
    tester;
    $id.addEventListener("submit",(e)=>{
        if(e.target === $id){
            e.preventDefault();
           tester = window.open($id.Pagina.value,
                "tester",
                `innerWidth=${$id.Ancho.value}`,`innerHeight=${$id.Alto.value}`);
        }
    })
    $id.addEventListener("click",(e)=>{
        if(e.target === $id.cerrar) tester.close();
    })
}