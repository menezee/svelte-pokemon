module.exports = async function () {
  const POKE_API = 'https://pokeapi.co/api/v2/pokemon'

  const requestPromises =
    await Promise
      .allSettled(
        [
          fetch(`${POKE_API}/1`),
          fetch(`${POKE_API}/2`)
        ],
      )
      .then(rawPromises => rawPromises.map(({ value }) => value.json()));

  return Promise
    .allSettled(requestPromises)
    .then(pokePromises => pokePromises.map(({ value }) => value));
};
