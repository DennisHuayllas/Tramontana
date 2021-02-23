const user = document.querySelector("#user");
const correo = document.querySelector("#email");
const alojamiento = document.querySelector("#Alojamiento");
const Establecimiento = document.querySelector("#Establecimiento");
const fechaInicio = document.querySelector("#start");
const fechaFin = document.querySelector("#end");
const valores = window.location.search;

const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var tipo = urlParams.get("tipo");
var id = urlParams.get("id");

const cargarMenu = () => {
  fetch("../menu.html")
    .then((response) => response.text())
    .then((codigo) => {
      document.querySelector("#menu").innerHTML = codigo;
    })
    .then(() => {
      if (sessionStorage.getItem('clave')) {

        document.querySelector("#btnLogin").style.display = "none";
        document.querySelector("#btnRegister").style.display = "none";
        document.querySelector("#misReservas").style.display = 'inline';
        document.querySelector("#LogOut").style.display = 'inline';
        document.querySelector("#LogOut").addEventListener("click", () => { sessionStorage.clear() })
      }
    })
}

const cargaFooter = () => {
  fetch("../footer.html")
    .then((response) => response.text())
    .then((codigo) => {
      document.querySelector("#footer").innerHTML = codigo;
    });
};

cargarMenu()
cargaFooter()
switch (tipo) {
  case "pisos":
    fetch("http://localhost:3000/pisos/" + id)
      .then((respuesta) => respuesta.json())
      .then((datos) => (Establecimiento.value = datos.poblacion))
      .catch((error) => {
        M.toast({ html: "No se puede obtener pisos.", classes: "red" });
      });

    break;

  case "cabanas":
    fetch("http://localhost:3000/cabanas/" + id)
      .then((respuesta) => respuesta.json())
      .then((datos) => (Establecimiento.value = datos.nombre))
      .catch((error) => {
        M.toast({ html: "No se puede obetener cabañas.", classes: "red" });
      });

    break;

  case "servicio":
    fetch("http://localhost:3000/servicios/" + id)
      .then((respuesta) => respuesta.json())
      .then((datos) => (Establecimiento.value = datos.tipo))
      .catch((error) => {
        M.toast({ html: "No se puede obetener cabañas.", classes: "red" });
      });

    break;
}
alojamiento.value = tipo;

user.value = sessionStorage.getItem("nombre");
correo.value = sessionStorage.getItem("correo");

const validadReserva = (reserva, object) => {

  let comprobacion = false

  console.log(reserva)
  if (reserva.length > 0) {


    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    };

    reserva.forEach(element => {

      console.log(element.idEstablecimiento + " || " + object.idEstablecimiento);

      if ((element.idEstablecimiento == object.idEstablecimiento) && (element.tipoAlojamiento == object.tipoAlojamiento)) comprobacion = true

    });

    if (comprobacion != true) {


      fetch("http://localhost:3000/reservas/", options).then((response) =>
        M.toast({ html: "dennis completada con éxito", classes: "teal" })
      );


    } else M.toast({ html: "Ya tienes reservado este servicio", classes: "red" });


  } else {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    };

    fetch("http://localhost:3000/reservas/", options)
      .then((response) =>
        M.toast({ html: "trozoc de imerda", classes: "teal" })
      )
      .then((data) => {
        /** Procesar los datos **/
      });
  }
};

document.querySelector("#boton").addEventListener("click", () => validar());

const validar = () => {


  if (sessionStorage.getItem('clave') != null) {

    if (fechaInicio.value.length > 0 && fechaFin.value.length > 0) {
      let jsonData = {
        usuarioId: sessionStorage.getItem("clave"),
        tipoAlojamiento: tipo,
        fechaInicio: fechaInicio.value,
        fechaFin: fechaFin.value,
        email: correo.value,
        idEstablecimiento: id,
      };

      fetch("http://localhost:3000/reservas?usuarioId=" + sessionStorage.getItem("clave"))
        .then((response) => response.json())
        .then((data) => {
          validadReserva(data, jsonData);
        });
    } else M.toast({ html: "Campos requeridos incompletos", classes: "red" });

  } else M.toast({ html: "Inicia sesión para hacer tu reserva", classes: "red" })




};
