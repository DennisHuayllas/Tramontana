
const esperaPisos = (datos) => {
        M.toast(
            {html: "<span>Usuario dado de alta correctamente.</span>",classes:"green"},2000);
        setTimeout(() =>{
            window.location = "pisos.html";
        }, 2000);
        console.log(datos);
}
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