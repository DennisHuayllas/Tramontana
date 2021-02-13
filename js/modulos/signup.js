
const esperaPisos = (datos) => {
        M.toast(
            {html: "<span>Usuario dado de alta correctamente.</span>",classes:"green"},2000);
        setTimeout(() =>{
            window.location = "pisos.html";
        }, 2000);
        console.log(datos);
}

export const generaAlta = (usuario) => {
    
    fetch("http://localhost:3000/usuarios",{
        method:"POST",
        body: JSON.stringify(usuario),
        headers:{
            "Content-type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(datos => esperaPisos(datos))
    .catch( error => {
        M.toast({html: "Problemas con el alta",classes:"red"});
    });
}