const botao = document.querySelector('.botao')

const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("id");

pokeApi.getPokemonDetail({ url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}/` })
    .then((pokemon) => {
        const pokemonDetails = document.getElementById("about");
        const weightFloat = pokemon.weight / 10;
        const heightFloat = pokemon.height / 10;
        

    pokemonDetails.innerHTML = `
        <li class="pokemon ${pokemon.type}" id="${pokemon.number}">
            <div class="container">
               <div class="container-header">
                    <div class="header">
                    <span class="number">#${pokemon.number}</span>
                    <h3 class="name">${pokemon.name}</h3>
            
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                    </div>
                 </div>
               </div>

             <div class=container-conteudo>
                <div class="conteudo">
                    <div class="detail-img">
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                    <div class="info">
                        <span class="caracterist">weight</span>
                        <span>Height</span>
                    </div>
                    <div class="info">
                        <span class="caracterist">${heightFloat} M</span>
                        <span>${weightFloat} KG</span>
                    </div>
                </div>
              </div>
             
             <div class="container-stats">
                <h3>Base Stats</h3>
                <div class="stats">
                    <div class="stat-group">
                        <div class="stat">
                            ${pokemon.namestats.map((namestat) => `<span class="namestat">${namestat}</span>`).join('')}
                        </div>
                        <div class="stat">
                            ${pokemon.valuestats.map((valuestat) => `<span class="counter-stat">${valuestat}</span>`).join('')}
                        </div>
                    </div>
                </div>
             </div>

             <div class="container-moves">
             <h3>Moves Stat</h3>
             <div class="moves">
                 <ol class="moves-group">
                     <div class="move">
                     ${pokemon.moves.slice(0, 4).map(move => `<ol class="namestat">${move}</ol>`).join('')}
                     </div>
                     <div class="stat">
                     ${pokemon.moves.slice(4, 8).map(move => `<ol class="namestat">${move}</ol>`).join('')}
                     </div>
                     <div class="stat">
                     ${pokemon.moves.slice(4, 8).map(move => `<ol class="namestat">${move}</ol>`).join('')}
                     </div>
                 </ol>
             </div>
          </div>
        
            </div>
        </li>
        `;
    })
    .catch((error) => {
        console.error("Erro ao buscar os detalhes do Pokémon:", error);
    });

botao.addEventListener('click', () => {
    location.replace("index.html")
});
