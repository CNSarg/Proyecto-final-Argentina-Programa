//BOTÓN HACIA ARRIBA (https://www.youtube.com/watch?v=SJVCvnKM_lI)

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


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
       //.toLocaleDateString('en-us', {year:"numeric", day:"numeric", month:"numeric"}) DESCARTAR, LO HABÍA USADO ANTES!!

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







/* function obtenerDatos() {
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => RandomUser.renderUserData(data))
    .catch(error => alert(error));
    }

renderUserData(data){
    console.log(data);
}
        
        
        
        
        
        
        

        console.log(data); 

        let author = data.results;
        // console.log(author);

        //Get Data Value
        let output = "<h2><center>Get User Data</center></h2>";

        //Get Data Loop Through
        author.forEach(function (lists) {
            output += `
            <div class="container">
                <div class="card mt-4 bg-light">
                    <ul class="list-group">
                        <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                        <li class="list-group-item"><img src="${lists.picture.large}"></li>
                        <li class="list-group-item">Phone Number: ${lists.cell}</li>
                        <li class="list-group-item">DOB: ${lists.dob.date}</li>
                        <li class="list-group-item">Age: ${lists.dob.age}</li>
                        <li class="list-group-item">Email ID: ${lists.email}</li>
                        <li class="list-group-item">Gender: ${lists.gender}</li>
                        <li class="list-group-item">City: ${lists.location.city}</li>
                        <li class="list-group-item">Country: ${lists.location.country}</li>
                        <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                    </ul>
                </div>
            </div> `;
        });

        //Show On Our Screen All Data
        document.getElementById('desde_api').innerHTML = output;

    });
};

*/