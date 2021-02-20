const cargaFooter = () => {
    fetch("../footer.html")
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
          document.querySelector("#misReservas").style.display = 'inline';
          document.querySelector("#LogOut").style.display = 'inline';
          document.querySelector("#btnLogOut").addEventListener("click",()=>{sessionStorage.clear()})
      }
  })
 }
cargarMenu(); 
