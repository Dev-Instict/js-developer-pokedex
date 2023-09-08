const botao = document.querySelector('.botao')
const pokemonList = document.getElementById('pokeCharacter');
const offset = 0;





function loadPokemon(offset) {
    pokeApi.getPokemons(offset).then((pokemons) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">
                    <a href="about.html?id=${pokemon.number}">${pokemon.name}</a>
                </span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('');

        pokeCharacter.innerHTML = newHtml;
    });
}

// Carregue a lista de Pokémon
loadPokemon(offset);

botao.addEventListener('click', () => {
    location.replace("index.html")
    
});
