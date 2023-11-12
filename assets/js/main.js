const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')

const limit = 12;
let offset = 0;
const maxRecords = 158;

function loadPokemonsItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}" id="${pokemon.number}">
            <span class="number">#${pokemon.number}</span>
            <h3 class="name">${pokemon.name}</h3>
    
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

document.addEventListener("DOMContentLoaded", () => {

    pokemonList.addEventListener("click", (event) => {
        const pokemonItem = event.target.closest(".pokemon");
        if (pokemonItem) {
            const pokemonId = pokemonItem.getAttribute("id");
            const url = `about.html?id=${pokemonId}`;
            window.open(url, "_self");
        }
    });
});




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