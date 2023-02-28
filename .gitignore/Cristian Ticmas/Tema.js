console.log("Hola mundo!!")
/*
function cambiarTema() {

}
<button onclick=cambiarTema={}>click</button> */



function cambiarTema() {
    alert('Se cambiará el tema');
    /*a = document.getElementById("css")*/
    b = document.getElementById("css").href
    if (b ==="file:///C:/Users/ALGUIEN/Documents/Cristian/CSS/css_dark.css"){
        document.getElementById("css").setAttribute("href", "CSS/css_ligth.css");
        document.getElementById("boton_tema").innerText="Tema Oscuro"
    }
   else{
        document.getElementById("css").setAttribute("href", "CSS/css_dark.css");
        document.getElementById("boton_tema").innerText="Tema Claro"
      }
    }
document.getElementById("boton_tema").addEventListener('click', cambiarTema);