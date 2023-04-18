const baseURL = 'https://digimon-api.vercel.app/api/digimon/name/'
const digimon = document.getElementById('digimonName')
const buttonSearch = document.getElementById('searchDigimon')
const buttonDelete = document.getElementById('deleteDigimon')
const appNode = document.getElementById('app')

buttonSearch.addEventListener('click', insertDigimon)
buttonSearch.addEventListener('touchstart', insertDigimon)

buttonDelete.addEventListener('click', deleteDigimon)
buttonDelete.addEventListener('touchstart', deleteDigimon)

function insertDigimon() {
    window.fetch(`${baseURL}${digimon.value.toLowerCase()}`)
    .then(response => {
        if (response.status === 404) {
            alert('¡El digimon no existe. Intentalo nuevamente!')
        } else{
            return response.json()
        }
    })
    .then(responseJSON => {
        const allItems = []

        const result = []

        for(let digimonInfo in responseJSON) {
            result.push([digimonInfo, responseJSON[digimonInfo]])
        }

        console.table(result)

        // Imagen
        const digimonImage = document.createElement('img')
        digimonImage.src = result[0][1].img

        //Nombre
        const digimonName = document.createElement('h2')
        digimonName.innerText = `Nombre: ${result[0][1].name}`


        // Nivel
        const digimonLevel = document.createElement('h3')
        digimonLevel.innerText = `Nivel: ${result[0][1].level}`

        // Contenedor
        const container = document.createElement('div')
        container.append(digimonImage, digimonName, digimonLevel)

        allItems.push(container)

        appNode.append(...allItems)
    })

}

function deleteDigimon() {
    let allDigimon = appNode.childNodes
    allDigimon = Array.from(allDigimon)

    allDigimon.forEach(digimon => {
        digimon.remove(digimon)
    })
}