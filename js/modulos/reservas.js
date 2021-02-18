import { muestraPisos } from "./pisos.js";

const sacaPiso = async (reserva) => {
  
  let respuesta = await fetch(`http://localhost:3000/pisos/${reserva.pisoId}`);
  let piso = await respuesta.json();

  muestraPisos(piso, reserva);
};
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
const muestraReservas = (reservas) => {

  if (localStorage.nombre) {
    document.querySelector("#reserva-nombre").textContent = ' de ' + localStorage.getItem('nombre');
  }
  reservas.forEach((reserva) => {
    sacaPiso(reserva);
  });
};

export const misReservas = () => {
  let clave = sessionStorage.getItem("clave");
  if (clave != null) {
    fetch(`http://localhost:3000/reservas/?usuarioId=${clave}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => muestraReservas(datos))
      .catch((error) => {
        M.toast({ html: "No hay reservas.", classes: "red" });
      });
  } else {
    M.toast({ html: "No hay usuario registrado.", classes: "red" });
  }
};
