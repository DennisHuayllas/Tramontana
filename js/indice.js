import { enviaLogin } from "./modulos/login.js";
import { damePisos } from "./modulos/pisos.js";
import { generaAlta } from "./modulos/signup.js";
import { misReservas } from "./modulos/reservas.js";

// Para la página de inicio
let inicioBoton = document.querySelector("#index-boton");
// Página signup. Alta de usuario
let altaUsuario = document.querySelector("#signup-boton");

// Para detectar que estamos en la página de "pisos"
let pagina = window.location;

////////////////////////
// CABECERAS DE FETCH //
////////////////////////
//   method: "POST",
//   mode: "cors",
//   cache: "no-cache",
//   credentials: "include",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   redirect: "follow",
//   referrer: "no-referrer",
//   //body: JSON.stringify(data),


//////////////////////
//////////////////////
//      CODIGO      //
//////////////////////
//////////////////////

// Cargamos la barra de menú que es comun a todas las páginas.

// Botón Login de página principal
if (inicioBoton !== null) {
  inicioBoton.addEventListener("submit", (e) => {
    e.preventDefault();
    let dato = {};
    dato.clave = document.querySelector("#clave").value;
    dato.password = document.querySelector("#password").value;
    enviaLogin(dato);
  });
}

// Página pisos, carga los datos de la BD.
if (pagina.pathname == "/pisos.html") {
  damePisos();
}

// Página reservas, carga los datos de la BD.
if (pagina.pathname == "/reservas.html") {
  misReservas();
}

// Alta usuario página signup
if (altaUsuario !== null) {
  altaUsuario.addEventListener("submit", (e) => {
    e.preventDefault();
    let dato = {};
    dato.clave = document.querySelector("#clave").value;
    dato.nombre = document.querySelector("#nombre").value;
    dato.password = window.btoa(document.querySelector("#password").value);
    dato.email = document.querySelector("#email").value;
    generaAlta(dato);
  });
}
