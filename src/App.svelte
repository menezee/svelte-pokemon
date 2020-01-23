<script>
  import Agenda from './components/Agenda.svelte';
  import Card from './components/Card.svelte';
  import fetchPokemons from './clients/pokemon';

  let pokemonArr = fetchPokemons();

  function clickOnTitle() {
    console.log('i\'ve been clicked');
  }
</script>

<main>
  <header on:click={clickOnTitle}>
    <h1>
      my first svelte app
    </h1>
    <h4>
      rendering some random pokemons
    </h4>
  </header>

  {#await pokemonArr}
    <p>Fetching pokemons...</p>
  {:then listOfPokemons}
    <Agenda>
      {#each listOfPokemons as {name, sprites}}
        <Card name={name} image={sprites.front_default} />
      {/each}
    </Agenda>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}

</main>
