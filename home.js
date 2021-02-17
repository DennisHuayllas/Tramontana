const cargaFooter = () => {
    fetch("../footer.txt")
      .then((response) => response.text())
      .then((codigo) => {
        document.querySelector("#footer").innerHTML = codigo;
      });
  };
  cargaFooter();
  const cargaMenu = () => {
    fetch("../menu.html")
      .then((response) => response.text())
      .then((codigo) => {
        document.querySelector("#menu").innerHTML = codigo;
      });
  
  };
  cargaMenu();
  setTimeout(()=>{

    if(sessionStorage.getItem('clave')){
            
      document.querySelector("#btnLogin").style.visibility = 'hidden';
      document.querySelector("#btnRegister").style.visibility = 'hidden';
      document.querySelector("#btnLogOut").addEventListener("click",()=>{
        sessionStorage.clear();
      })
  }
  }, 50);