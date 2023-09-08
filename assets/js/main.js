const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')
const selectionPoke = document.getElementById('pokemonList')
const limit = 10;
let offset = 0;
const maxRecords = 158;

function loadPokemonsItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
    
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
    
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonsItems(offset, limit)


loadMore.addEventListener('click', () => {
    offset += limit

    const qtRecord = offset + limit

    if (qtRecord >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonsItems(offset, newLimit)

        loadMore.parentElement.removeChild(loadMore)
    }else{
        loadPokemonsItems(offset, limit)
    }

})

selectionPoke.addEventListener('click', () => {
    location.replace("about.html")
    
});
