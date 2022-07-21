// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");

for (let i = 1; i <= 150; i++) {
  const pokemon = document.createElement("div");
  const label = document.createElement("span");
  label.innerHTML = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}
