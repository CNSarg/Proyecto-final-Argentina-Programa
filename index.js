

//API RANDOM USER // 
//fue de lo primero que hice al iniciar el proyecto y no copié los links de donde obtuve info para hacerlo.

fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let nombre = data.results[0].name.first
        let apellido = data.results[0].name.last
        let nombreComp = nombre + ' ' + apellido
        let fotoPers = data.results[0].picture.large
        let telefono = data.results[0].phone
        let fechaNac = new Date(data.results[0].dob.date)

       //FORMATO DE FECHAS (https://www.youtube.com/watch?v=eOlDANgRaf8)
       
            let anioNac = (fechaNac.getFullYear());
            let mesNac = ('0' + (parseInt(fechaNac.getMonth())+1)).slice(-2);
            let diaNac = ('0' + parseInt(fechaNac.getDate())).slice(-2);
        
       
       // CALCULAR EDAD (https://www.youtube.com/watch?v=sxXGzXY1jk8)
       
       /*Sé que podría haber tomado la edad directamente desde el json y sería más
       rápido y directo pero quise probar si lo podía calcular yo mismo*/ 

           let fechaActual = new Date()
           let anioActual = parseInt(fechaActual.getFullYear());
           let mesActual = ('0' + (parseInt(fechaActual.getMonth())+1)).slice(-2);
           let diaActual = ('0' + parseInt(fechaActual.getDate())).slice(-2);

        function calcularEdad(){
            edadCalculada = anioActual - anioNac;
                      if(mesActual<mesNac) {
                           edadCalculada--;
                       } else if (mesActual === mesNac){
                           if(diaActual<diaNac){
                               edadCalculada--;
                           }
                       } 
            return edadCalculada;
               }

        calcularEdad()
        //console.log(edadCalculada)

        
        let email = data.results[0].email
        let domicilio = data.results[0].location.street.name + ' nº ' + data.results[0].location.street.number + ', ' + data.results[0].location.city + ', ' + data.results[0].location.country + '. Código postal ' +data.results[0].location.postcode
        document.getElementById('nombre_comp').innerHTML = nombreComp
        document.getElementById('foto_pers').innerHTML = `<img alt="imagen personal" class="rounded" src=${fotoPers}>` //CORREGIR ESTO!! PARA QUE NO HAYA ESTILO ACÁ///
        document.getElementById('nombre').innerHTML += nombre
        document.getElementById('apellido').innerHTML += apellido
        document.getElementById('telefono').innerHTML += telefono
        document.getElementById('fecha_nac').innerHTML += diaNac + '/' + mesNac + '/' + anioNac 
        document.getElementById('email').innerHTML += email
        document.getElementById('domicilio').innerHTML += domicilio
        document.getElementById('edad').innerHTML += edadCalculada + ' años'
               
    })

// BOTÓN TEMA OSCURO - TEMA CLARO

function cambiarTema() {
    body.classList.toggle('oscuro')
    botonTema.classList.toggle ('boton-oscuro')
}
document.getElementById("botonTema").addEventListener('click', cambiarTema);

//BOTÓN HACIA ARRIBA (https://www.youtube.com/watch?v=SJVCvnKM_lI)

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


// CALCULAR ALTO DEL HEADER PARA APLICAR SCROLL PADDING (https://www.youtube.com/watch?v=iGUSTyG-CYw)

function calcularScrollPadding () {
    let altoHeader = document.getElementById("header")
    .offsetHeight;
    //console.log(altoHeader);

    document.documentElement.style.setProperty(
        "--scroll-padding",
        altoHeader + 10 + "px");
    }

setTimeout(calcularScrollPadding, 1500);

/* (le agregué el retardo porque si no me lo calculaba antes de cargar los datos. Probé con EventListener DOMContentLoaded
   pero no me funcionó. Seguro hay una forma más adecuada de resolverlo pero se me acerca el tiempo de entrega del proyecto
   y si bien no es lo óptimo así al menos funciona)*/

/*
document.getElementById("header").addEventListener("resize", (event) => {
    calcularScrollPadding ()
    });
*/ 

/* Esto lo descarto por el momento porque sería ideal si el menú se cerrará al hacer click. Intenté solucionarlo mediante
   Boostrap agregando class="collapse navbar-collapse" id="my-navbar-collapse" toggle="collapse" data-target=".navbar-collapse"
   y así se cerraba el menú pero dejaban de funcionar los links. No me dio el tiempo para seguir indagando.*/    