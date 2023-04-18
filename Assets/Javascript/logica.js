var contenido = document.querySelector("#contenido")

fetch('https://digimon-api.vercel.app/api/digimon')
.then(response => response.json())
.then(datos => {
    div (datos)
})    

function div (datos) {
    contenido.innerHTML = ""

    for(let temp of datos){
        contenido.innerHTML +=
    `
    <div id="contenido">${temp.name}</div>

    ` 

    }
}
