export const muestraPisos = (piso, reserva) => {
    let addPisos = document.querySelector("#pisos");

    let salida = `
              <div id="hola" class="col s12 m4 xl4 ">
                <div class="card">
                  <div class="card-image">
                    <img src="${piso.imagen}">  
                    <a id="alquilar"class="btn-floating halfway-fab pulse waves-effect waves-light red"><i class="material-icons">local_grocery_store</i></a>
                  </div>
                  <div class="card-content" style="background-color:white">
                        <span id="nombre"class="card-title">${piso.poblacion}</span>
                        <li>Nº habitaciones: ${piso.habitaciones}</li>
                        <li>Nº de aseos: ${piso.aseos}</li>
                        <li>${piso.exterior ? 'Exterior' : 'Interior'}</li>
                        <br>
                        <p id="nombre"class="card-title">${piso.precio}€/Noche</p>
                    </ul>`;
    
            if (reserva) {
                salida += `<div class="chip white">
                Ha sido reservado${reserva.dias} dias en el mes de ${reserva.mes}
              </div>`;
            }
    salida +=  `</div>
            </div>`;


    let e = document.createElement("div");
    e.innerHTML = salida;

    addPisos.appendChild(e);
 
}
const muestraCabañas = (cabana, reserva) => {
  let addCabanas = document.querySelector("#cabanas");

  let salida = `
            <div id="hola" class="col s12 m4 xl4 ">
              <div class="card">
                <div class="card-image">
                  <img src="${cabana.imagen}">  
                  <a id="alquilar"class="btn-floating halfway-fab pulse waves-effect waves-light red"><i class="material-icons">local_grocery_store</i></a>
                </div>
                <div class="card-content" style="background-color:white">
                      <span id="nombre"class="card-title">${cabana.nombre}</span>
                      <li>Localidad: ${cabana.poblacion} </li>
                      <li>Nº Camas: ${cabana.camas}</li>
                      <li>Nº de aseos: ${cabana.aseos}</li>
                      <br>
                      <p id="nombre"class="card-title">${cabana.precio}€/Noche</p>
                  </ul>`;
          if (reserva) {
              salida += `<div class="chip white">
              Ha sido reservado${reserva.dias} dias en el mes de ${reserva.mes}
            </div>`;
          }
  salida +=  `</div>
          </div>`;


  let e = document.createElement("div");
  e.innerHTML = salida;

  addCabanas.appendChild(e);

}

const muestraServicios = (servicio, reserva) => {
  let addServicio = document.querySelector("#servicios");

  let salida = `
            <div id="hola" class="col s12 m4 xl4 ">
              <div class="card">
                <div class="card-image">
                  <img src="${servicio.imagen}">  
                  <a id="alquilar"class="btn-floating halfway-fab pulse waves-effect waves-light red"><i class="material-icons">local_grocery_store</i></a>
                </div>
                <div class="card-content" style="background-color:white">
                      <span id="nombre"class="card-title">${servicio.tipo}</span>
                      <li>Duracion: ${servicio.duracion} </li>
                      <br>
                      <p id="nombre"class="card-title">${servicio.precio}</p>
                  </ul>`;
          if (reserva) {
              salida += `<div class="chip white">
              Ha sido reservado${reserva.dias} dias en el mes de ${reserva.mes}
            </div>`;
          }
  salida +=  `</div>
          </div>`;


  let e = document.createElement("div");
  e.innerHTML = salida;

  addServicio.appendChild(e);

}
const sacaPisos = (pisos) => {
    pisos.forEach((dato) => muestraPisos(dato));
}
const sacaCabañas = (cabana) => {
  cabana.forEach((dato) => muestraCabañas(dato));
}
const sacaServicios = (servicios) => {
  servicios.forEach((dato) => muestraServicios(dato));
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

const dameCabañas = () => {
    
  fetch("http://localhost:3000/cabanas")
  .then(respuesta => respuesta.json())
  .then(datos => sacaCabañas(datos))
  .catch( error => {
      M.toast({html: "No se puede obetener cabañas.",classes:"red"});
  });
}
dameCabañas();

const dameServicios = () => {
    
  fetch("http://localhost:3000/servicios")
  .then(respuesta => respuesta.json())
  .then(datos => sacaServicios(datos))
  .catch( error => {
      M.toast({html: "No se puede obetener cabañas.",classes:"red"});
  });
}
dameServicios();