

const user = document.querySelector("#user")
const correo = document.querySelector('#email')
const alojamiento= document.querySelector('#Alojamiento')
const Establecimiento= document.querySelector('#Establecimiento')
const fechaInicio= document.querySelector('#start')
const fechaFin = document.querySelector('#end')

user.value = sessionStorage.getItem('nombre')
correo.value = sessionStorage.getItem('correo')

const validar=()=> {



    alert("Datos de formulario enviados exitosamente.");
    document.getElementById("myForm").reset();
	
	}
