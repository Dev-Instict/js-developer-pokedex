const pokeApi = {}

function convertPokeApiDetail(pokeDetail){
    
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight

    const Namestats = pokeDetail.stats.map((stats) => stats.stat.name)
    const [namestat] = Namestats

    pokemon.namestats = Namestats
    pokemon.namestat = namestat

    const Valuestats = pokeDetail.stats.map((stats) => stats.base_stat)
    const [valuestat] = Valuestats

    pokemon.valuestats = Valuestats
    pokemon.valuestat = valuestat

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    const moves = pokeDetail.moves.map((moves) => moves.move.name)
    const [move] = moves

    pokemon.moves = moves
    pokemon.move = move

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
   return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetail)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsDetails) => pokemonsDetails)
        
}