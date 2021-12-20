
let formularioReg = document.getElementById("formRegistro")
let formularioLogIn = document.getElementById("formLogIn")
let usuarios = [] = JSON.parse(localStorage.getItem("usuarios")) || [] 

const capturarDatos = () => {
    let usuario = document.getElementById("usuario").value
    let contraseña = document.getElementById("contraseña").value
    
    let registro = {
        usuario,
        contraseña,
    }

    usuarios.unshift(registro)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

formularioReg.addEventListener("submit", e => {
    e.preventDefault()
    capturarDatos()
    e.target.reset()
    alert("Se registro correctamente")
    window.location.href = "index.html";
})
formularioLogIn.addEventListener("submit", e => {
    e.preventDefault()
    e.target.reset()
    alert("Se validaron los datos")
    window.location.href = "index.html";
})

