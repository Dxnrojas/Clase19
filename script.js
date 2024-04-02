const render = () => {
    const contenedor = document.getElementById("cuadro");
console.log (contenedor);

contenedor.addEventListener("click",(event)=> {
    console.log(event);
    alert("Se hace click en el cuadro");
});

contenedor.addEventListener("mouseenter", () => {
// alert("Entre al componente");
contenedor.classList.remove("contenedor");
contenedor.classList.add("contenedorDos");

});

contenedor.addEventListener("mouseleave", () => {
    // alert("Sali al componente");
    contenedor.classList.add("contenedor");
    contenedor.classList.remove("contenedorDos");
    });
};

document.addEventListener("DOMContentLoaded", render);