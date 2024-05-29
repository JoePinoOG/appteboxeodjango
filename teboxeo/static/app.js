const intersection1 = document.getElementById("intersection1");
const intersection2 = document.getElementById("intersection2");
const intersection3 = document.getElementById("intersection3");
const intersection4 = document.getElementById("intersection4");
const intersection5 = document.getElementById("intersection5");
const intersection6 = document.getElementById("intersection6");
const intersection7 = document.getElementById("intersection7");
const intersection8 = document.getElementById("intersection8");
const intersection9 = document.getElementById("intersection9");
const intersection10 = document.getElementById("intersection10");
const intersection11 = document.getElementById("intersection11");
const intersection12 = document.getElementById("intersection12");
const intersection13 = document.getElementById("intersection13");
const intersection14 = document.getElementById("intersection14");
const intersection15 = document.getElementById("intersection15");

const botonProducto = document.querySelectorAll(".boton-producto")
const contenedorModal = document.getElementById("modalProductos");
const seccionUsuarios = document.getElementById("usuarios");
const botonPagar = document.getElementById('btnPagar');
const botonVaciar = document.getElementById('btnVaciar')


let usuarios=[]
let imgUsuarios= []
let productos = JSON.parse(localStorage.getItem("productos")) || []

botonVaciar.addEventListener('click',()=>{
    productos=[]
    limpiarHTML()
    localStorage.removeItem('productos')
})
//console.log(JSON.parse(localStorage.getItem("productos")))

if(JSON.parse(localStorage.getItem("productos"))){
    JSON.parse(localStorage.getItem("productos")).forEach(producto=>{
        const contenedor = document.createElement("div");
        const nombreProducto = document.createElement("p");
        const precioProducto = document.createElement("p");
        
        contenedor.classList.add("d-flex","justify-content-between");
        nombreProducto.textContent = producto.nombre;
        precioProducto.textContent = producto.precio;
        
        contenedor.appendChild(nombreProducto);
        contenedor.appendChild(precioProducto);

        contenedorModal.appendChild(contenedor);
    })
}

botonPagar.addEventListener('click',()=>productos.length===0 ? alert('No tienes productos en el carrito') : alert('Pagando....'))

for (let i = 0; i < botonProducto.length; i++) {
    botonProducto[i].addEventListener("click",()=>{
        const nombreProducto = botonProducto[i].parentElement.parentElement.querySelector(".card-title").textContent
        const precioProducto = botonProducto[i].parentElement.querySelector("h4").textContent
        const objetoProducto = {nombre:nombreProducto,precio:precioProducto}
        productos= [...productos,objetoProducto]

        agregarProductosModal()
        localStorage.setItem("productos",JSON.stringify(productos))
    
    })
}


const cargarIntersection = entradas=>{
    entradas.forEach(entrada=>{
        if(entrada.isIntersecting){
            entrada.target.classList.remove("estilo-intersection");
            entrada.target.classList.add("visible");
        }
    }
    )
}

function limpiarHTML(){
    while(contenedorModal.firstChild){
        contenedorModal.removeChild(contenedorModal.firstChild);
    }
}

const observador = new IntersectionObserver(cargarIntersection,{
    root:null,
    rootMargin:"0px 0px 0px 0px",
    threshold:0.5
}
);
for (let i = 0; i < 10; i++) {
    async function obtenerImg(){
        const respuesta = await fetch('https://randomuser.me/api/')
        const datos = await respuesta.json()
        imgUsuarios.push(datos.results[0].picture.large)  
    }
    obtenerImg()
}

async function obtenerDatos(){
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    const datos = await respuesta.json()
    datos.map(dat=>{
        usuarios.push(dat)
    })
    
}  
obtenerDatos()

function llenarDatos(){
    for (let i = 0; i < 10; i++) {
        const contenedor = document.createElement("div");
        const nombreUsuario = document.createElement("h5");
        const contenedorImg = document.createElement("div");
        const imagenUsuario = document.createElement("img");
        contenedor.classList.add("col-5",'col-md-4','col-lg-3')
        nombreUsuario.classList.add("mt-3","text-center")
        contenedorImg.classList.add('d-flex','justify-content-center');
        imagenUsuario.classList.add("mt-3")
        nombreUsuario.textContent = usuarios[i].name
        imagenUsuario.src = imgUsuarios[i]
        contenedorImg.appendChild(imagenUsuario)
        
        contenedor.appendChild(contenedorImg)
        contenedor.appendChild(nombreUsuario);

        seccionUsuarios.appendChild(contenedor);
    }
}
setTimeout(() => {
    llenarDatos()
}, 5000);

console.log(usuarios)
console.log(imgUsuarios)

function agregarProducto(producto){
    console.log(producto)
}

function agregarProductosModal(){
    limpiarHTML()
    alert('Producto agregado')
    productos.forEach(producto=>{
        const contenedor = document.createElement("div");
        const nombreProducto = document.createElement("p");
        const precioProducto = document.createElement("p");
        
        contenedor.classList.add("d-flex","justify-content-between");
        nombreProducto.textContent = producto.nombre;
        precioProducto.textContent = producto.precio;
        
        contenedor.appendChild(nombreProducto);
        contenedor.appendChild(precioProducto);

        contenedorModal.appendChild(contenedor);
    })


}

observador.observe(intersection1);
observador.observe(intersection2);
observador.observe(intersection3);
observador.observe(intersection4);
observador.observe(intersection5);
observador.observe(intersection6);
observador.observe(intersection7);
observador.observe(intersection8);
observador.observe(intersection9);
observador.observe(intersection10);
observador.observe(intersection11);
observador.observe(intersection12);
observador.observe(intersection13);
observador.observe(intersection14);
observador.observe(intersection15);


    
                