export const muestraPisos = (piso, reserva) => {
    let addPisos = document.querySelector("#pisos");

    let salida = `
              <div id="hola" class="col s12 m4 xl4 ">
                <div class="card">
                  <div class="card-image">
                    <img src="Img/casa_1.jpg">
                    <span id="nombre"class="card-title">${piso.poblacion}</span>
                    <a id="alquilar"class="btn-floating halfway-fab pulse waves-effect waves-light red"><i class="material-icons">local_grocery_store</i></a>
                  </div>
                  <div class="card-content">
                        <li>Calle:${piso.calle} </li>
                        <li>Nº habitaciones: ${piso.habitaciones}</li>
                        <li>Nº de aseos: ${piso.aseos}</li>
                        <li>${piso.exterior ? 'Exterior' : 'Interior'}</li>
                    </ul>`;
    
            if (reserva) {
                salida += `<div class="chip teal">
                Ha sido reservado${reserva.dias} dias en el mes de ${reserva.mes}
              </div>`;
            }
    salida +=  `</div>
            </div>`;


    let e = document.createElement("div");
    e.innerHTML = salida;

    addPisos.appendChild(e);
}

const sacaPisos = (pisos) => {
    pisos.forEach((dato) => muestraPisos(dato));
}
const cargaFooter = () => {
    fetch("../footer.html")
      .then((response) => response.text())
      .then((codigo) => {
        document.querySelector("#footer").innerHTML = codigo;
      });
  };
  cargaFooter();
  const cargarMenu=()=> {
    fetch("../menu.html")
      .then((response) => response.text())
      .then((codigo) => {
        document.querySelector("#menu").innerHTML = codigo;
      })
      .then(()=>{
        if(sessionStorage.getItem('clave')){
          
          document.querySelector("#btnLogin").style.display = "none";
          document.querySelector("#btnRegister").style.display = "none";
          document.querySelector("#misReservas").style.display = 'inline';
          document.querySelector("#LogOut").style.display = 'inline';
          document.querySelector("#LogOut").addEventListener("click",()=>{sessionStorage.clear()})
      }
  })
 }
 cargarMenu();


export const damePisos = () => {
    
    fetch("http://localhost:3000/pisos")
    .then(respuesta => respuesta.json())
    .then(datos => sacaPisos(datos))
    .catch( error => {
        M.toast({html: "No se puede obtener pisos.",classes:"red"});
    });
}