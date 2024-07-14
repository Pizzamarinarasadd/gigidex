

fetchData();

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
         alert("Pokemon not found"); 
         throw new Error("Error fetching data");
  
    }

    const data = await response.json();
    const details=document.getElementById("details");
    const container=document.getElementById("container");
    let name = data.name.charAt(0).toUpperCase() + data.name.slice(1); // Bulbasaur
    let types = data.types.map((type) => type.type.name);// ["grass", "poison"]
    let type = types[0]
    let abilities = data.abilities.map((ability) => ability.ability.name);// ["overgrow", "chlorophyll"]
    const dedashed = abilities.map(ability => { return ability.replace("-"," ") });
    let health = data.stats.find((stat) => stat.stat.name == "hp").base_stat; // 45
    let attack = data.stats.find((stat) => stat.stat.name == "attack").base_stat; // 49
    let defense = data.stats.find((stat) => stat.stat.name == "defense").base_stat; // 49

    let elements = {
      name: document.getElementById("pokemon_name"),
      hp: document.getElementById("pokemon_hp"),
      image: document.getElementById("pokemon_image"),
      abilities:document.getElementById("abilities"),
      info:document.getElementById("info"),
      types: document.getElementById("types")
    }
    show();
    elements.name.innerText = `${name}`;
    elements.hp.innerText = `${health}`;
    elements.abilities.innerText = `Abilites: ${dedashed}`;
    elements.info.innerText = `Atk: ${attack}, Def: ${defense}`;
    elements.types.innerText = `Types: ${types.join(', ')}`;
   

    elements.image.src = `${data.sprites.other.home.front_default}`;
    removeTypeClasses();
    switch (type) {
        case "grass":
          container.classList.add("grass");
          document.getElementById("type-icon").src="grass.png"
          document.getElementById("type-icon").style.display = "inline-block";
    
          break;
        case "fire":
          container.classList.add("fire");
          document.getElementById("type-icon").src="fire.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "water":
            container.classList.add("water");
          document.getElementById("type-icon").src="water.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "electric":
          container.classList.add("electric");
          document.getElementById("type-icon").src="electric.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "ground":
          container.classList.add("ground");
          document.getElementById("type-icon").src="ground.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "flying":
          container.classList.add("flying");
          document.getElementById("type-icon").src="flying.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "poison":
          container.classList.add("poison");
          document.getElementById("type-icon").src="poison.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "rock":
            container.classList.add("rock");
          document.getElementById("type-icon").src="rock.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "bug":
            container.classList.add("bug");
          document.getElementById("type-icon").src="bug.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "normal":
            container.classList.add("normal");
          document.getElementById("type-icon").src="normal.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "fighting":
            container.classList.add("fighting");
          document.getElementById("type-icon").src="fighting.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "psychic":
            container.classList.add("psyco");
          document.getElementById("type-icon").src="psyco.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "steel":
            container.classList.add("steel");
          document.getElementById("type-icon").src="steel.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "ice":
            container.classList.add("ice");
          document.getElementById("type-icon").src="ice.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "dragon":
            container.classList.add("dragon");
          document.getElementById("type-icon").src="dragon.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "ghost":
            container.classList.add("ghost");
          document.getElementById("type-icon").src="ghost.png"
          document.getElementById("type-icon").style.display = "block";
          break;
        case "dark":
            container.classList.add("dark");
          document.getElementById("type-icon").src="dark.png"
          document.getElementById("type-icon").style.display = "block";
          break;
      }
    } catch (error) {
    console.error(error);
  }
}

function removeTypeClasses() {
    const container = document.getElementById("container");
    container.classList.remove("grass", "fire", "water", "electric", "ground", "flying", "poison", "rock", "bug", "normal", "fighting", "psyco", "steel", "ice", "dragon", "ghost", "dark");
  }
function show(){
    const details=document.getElementById("details");
    details.style.visibility= "visible";
  }

  const searchbox=document.getElementById("pokemonName")
  searchbox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      fetchData()
    }
});
