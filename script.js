let currentPageUrl = 'https://swapi.dev/api/people/'

window.onload = async () => {
    try{
        await loadCharacters(currentPageUrl);
    } catch(error) {
        console.log(error);
        alert('Erro ao carregar cards');
    }
};

async function loadCharacters(url) {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = ''; // Limpar os resultados anteriores

    try{
        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.forEach((character) => {

            const card = document.createElement("div")
            card.style.backgroundImage = `url('https://starwars-visualguide.com/assets/img/characters/1.jpg')`
            card.className = "cards"

            const characterNameBG= document.createElement("div")
            characterNameBG.className = "character-name-bg"

            const characterName = document.createElement("span")
            characterName.className = "character-name"
            characterName.innerText = `${character.name}`

            characterNameBG.appendChild(characterName)
            card.appendChild(characterNameBG)

           mainContent.appendChild(card)
        })

        currentPageUrl = url

    }catch(error){
        alert('Erro ao carregar os personagens');
        console.log(error)
    }
}