const offset = 0;
const limite = 10;
const api = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}
&limit=${limite}`;

//função onde criamos dinamicamente uma lista toda vez que a função for chamada

function pegaListaHtml(pokemon) {
  return `
  
  <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
      <ol class="types">
        <li class="type">${pokemon.type}</li>
        <li class="type">poison</li>
      </ol>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg">
    </div>

  </li>

`;
}

const lista = document.querySelector("#pokemonsLista");

fetch(api)
  .then((response) => response.json())
  .then((data) => data.results)
  .then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];

      lista.innerHTML += pegaListaHtml(pokemon);
    }
  });
