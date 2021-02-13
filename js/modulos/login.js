
const login_f = (dato) => {
    console.log(JSON.stringify(dato));
    // Comprobar datos ....
    if (dato[0].clave == document.querySelector("#clave").value && dato[0].password == window.btoa(document.querySelector("#password").value)) { 
        sessionStorage.setItem('clave', dato[0].id);
        localStorage.setItem('nombre', dato[0].nombre);
        window.location='pisos.html';
    }
    else {
        M.toast({html: "Usuario o contraseña erroneo",classes:"red"},3000);
    }
}

export const enviaLogin = (usuario)=>{
           http://localhost:3000/usuarios/1
    fetch(`http://localhost:3000/usuarios/?clave=${usuario.clave}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(respuesta =>  respuesta.json())
    .then(datos => login_f(datos))
    .catch(error => {
        M.toast({html: "Usuario o contraseña erroneo",classes:"red"});
    })
};
