// Consumo de API's

// Consumiendo el API de The Breaking Bad
const personajes = [];
fetch("https://www.breakingbadapi.com/api/characters").then((res) => res.json()).then((data) => personajes = data);
console.log(personajes);