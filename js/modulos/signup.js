
const esperaPisos = (datos) => {
        M.toast(
            {html: "<span>Usuario dado de alta correctamente.</span>",classes:"green"},2000);

            setTimeout(()=>{

                window.location = '/pisos'
            },2000)
     
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
          document.querySelector("#LogOut").addEventListener("click",()=>{sessionStorage.clear()})
      }
  })
 }
cargarMenu();



const validarusuario =async (object,usuario)=>{

    let validar = false 
    object.forEach(element => {
    
       
        if (element.email == usuario.email ) validar = true

    
    });

    if(validar == false){

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

    } else  M.toast({html: "Este correo ya ha sido utilizado anteriomente",classes:"red"})


}
export const generaAlta = (usuario) => {
    
    let object = null 
    fetch("http://localhost:3000/usuarios")
    .then(respuesta => respuesta.json())
    .then(datos => validacion = validarusuario(datos,usuario))
    .catch(error => {
      
    });
  
   
}