export const muestraPisos = (piso, reserva) => {
    let addPisos = document.querySelector("#pisos");

    let salida = `
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">Piso en ${piso.poblacion}</span>
                    <h5>Características:</h5>
                    <ul>
                        <li>Calle: ${piso.calle}</li>
                        <li>Nº habitaciones: ${piso.habitaciones}</li>
                        <li>Nº de aseos: ${piso.aseos}</li>
                        <li>${piso.exterior ? 'Exterior' : 'Interior'}</li>
                    </ul>`;
    
            if (reserva) {
                salida += `<h4>Ha sido reservado ${reserva.dias} dias en el mes de ${reserva.mes}</h4>`;
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
    fetch("../footer.txt")
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
          
          document.querySelector("#btnLogin").style.visibility = 'hidden';
          document.querySelector("#btnRegister").style.visibility = 'hidden';
          document.querySelector("#btnLogOut").addEventListener("click",()=>{sessionStorage.clear()})
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