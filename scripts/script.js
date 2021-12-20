let formulario = document.getElementById("formulario")
let listarCita = document.getElementById("listarCita")
let buscar = document.getElementById("btnBuscar")
let busqueda = document.getElementById("busqueda")

let citas = [] = JSON.parse(localStorage.getItem("citas")) || [] 

const capturarDatos = () => {
    let nombre = document.getElementById("nombre").value
    let fecha = document.getElementById("fecha").value
    let hora = document.getElementById("hora").value
    let sintomas = document.getElementById("sintomas").value

    let registro = {
        nombre,
        fecha,
        hora,
        sintomas
    }

    citas.unshift(registro)
    localStorage.setItem("citas", JSON.stringify(citas))
    getLocalStorage()
}

formulario.addEventListener("submit", e => {
    e.preventDefault()
    capturarDatos()
    e.target.reset()
})

const getLocalStorage = () =>{

    listarCita.innerHTML = ""

    let citasLocalStorage = JSON.parse(localStorage.getItem("citas"))
    console.log(citasLocalStorage);
    citasLocalStorage?.map(cita => {
        const{nombre, fecha, hora, sintomas} = cita
        listarCita.innerHTML +=`
        <tr>
            <td>${nombre}</td>
            <td>${fecha}</td>
            <td>${hora}</td>
            <td>${sintomas}</td>
        </tr>
        `  
    })
}
buscar.addEventListener("click", e =>{
    e.preventDefault()
    let input = document.getElementById("inputBuscar").value
    let data = JSON.parse(localStorage.getItem("citas"))
    let filtro = data.filter(cita => cita.nombre.toLowerCase() === input.toLowerCase())
    busqueda.innerHTML = ""

    filtro.length === 0 
    ?
    busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe </div> `
    :
    console.log(filtro); 
    filtro.map(cita =>{
        const {nombre, fecha, hora, sintomas} = cita
        busqueda.innerHTML += `
            <div style="color: white;">${nombre}</div>
            <div style="color: white;">${fecha}</div>
            <div style="color: white;">${hora}</div>
            <div style="color: white;">${sintomas}
                <button onclick="borrarBusqueda()">Borrar</button>
            </div>
            <br>
        `
    })
})
function borrarBusqueda() {
    busqueda.innerHTML = ""
}

document.addEventListener('DOMContentLoaded', getLocalStorage)

