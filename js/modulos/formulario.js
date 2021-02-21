const user = document.querySelector("#user")
const correo = document.querySelector('#email')
const alojamiento= document.querySelector('#Alojamiento')
const Establecimiento= document.querySelector('#Establecimiento')
const fechaInicio= document.querySelector('#start')
const fechaFin = document.querySelector('#end')
const valores = window.location.search;

const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var tipo = urlParams.get('tipo')
var id = urlParams.get('id')

switch(tipo){

	case 'pisos': 
	
	fetch("http://localhost:3000/pisos/"+id)
	.then(respuesta => respuesta.json())
	.then(datos => Establecimiento.value = datos.poblacion )
	.catch( error => {
		M.toast({html: "No se puede obtener pisos.",classes:"red"});

	
	});
	
	break ; 

	case 'cabanas':
	
	
			fetch("http://localhost:3000/cabanas/"+id)
			.then(respuesta => respuesta.json())
			.then(datos => Establecimiento.value = datos.nombre )
			.catch( error => {
				M.toast({html: "No se puede obetener cabañas.",classes:"red"});
			});
		  
		 
	
	break ; 

	case 'servicio': 
	  
		fetch("http://localhost:3000/servicios/"+id)
		.then(respuesta => respuesta.json())
		.then(datos => Establecimiento.value = datos.tipo )
		.catch( error => {
			M.toast({html: "No se puede obetener cabañas.",classes:"red"});
		});
	  
	break ; 




}
alojamiento.value = tipo

user.value = sessionStorage.getItem('nombre')
correo.value = sessionStorage.getItem('correo')

const validar=()=> {



    alert("Datos de formulario enviados exitosamente.");
    document.getElementById("myForm").reset();
	
	}
