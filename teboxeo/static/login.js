const contraLogin = document.getElementById("contraLogin");
const correoLogin = document.getElementById("correoLogin");
const contraRegistro = document.getElementById("contraRegistro");
const botonLogin = document.getElementById("botonLogin");
const botonRegistro = document.getElementById("botonRegistro");
const mensajeLogin = document.getElementById("mensajeLogin");
const mensajeRegistro = document.getElementById("mensajeRegistro");
const nombreRegistro = document.getElementById("nombreRegistro");
const correoRegistro = document.getElementById("correoRegistro");

botonLogin.addEventListener("click",(e)=>{
    e.preventDefault()
    if(contraLogin.value.length < 5 || correoLogin.value ==="" ){
        const p = document.createElement("p");
        p.textContent="Campos inválidos, porfavor corregir"
        p.classList.add("text-danger","text-center")
        mensajeLogin.appendChild(p)
        setTimeout(() => {
            mensajeLogin.removeChild(p)
        }, 2000);
    }else{
        const p = document.createElement("p");
        p.textContent="Usuario Logueado"
        p.classList.add("text-primary","text-center")
        mensajeLogin.appendChild(p)
        contraLogin.value= "";
        correoLogin.value="";
        setTimeout(() => {
            mensajeLogin.removeChild(p)
          
        }, 2000);
    }
})

botonRegistro.addEventListener("click",(e)=>{
    e.preventDefault()
    if(contraRegistro.value.length < 5 || nombreRegistro.value.length < 3 || correoRegistro.value === "" ){
        const p = document.createElement("p");
        p.textContent="Campos inválidos, porfavor corregir"
        p.classList.add("text-danger","text-center")
        mensajeRegistro.appendChild(p)
        setTimeout(() => {
            mensajeRegistro.removeChild(p)
        }, 2000);
    }else{
        const p = document.createElement("p");
        p.textContent="Usuario Registrado"
        p.classList.add("text-primary","text-center")
        mensajeRegistro.appendChild(p)
        contraRegistro.value="";
        nombreRegistro.value="";
        correoRegistro.value="";
        setTimeout(() => {
            mensajeRegistro.removeChild(p)
        }, 2000);
    }
})
