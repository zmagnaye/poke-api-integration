document.getElementById("pokemon-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("pokemon-name").value.toLowerCase();
    const infoContainer = document.getElementById("pokemon-info");
    infoContainer.innerHTML = "Loading.....";

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(!response.ok) throw new Error("Pokemon not found!");
        const data = await response.json();
        infoContainer.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Type: ${data.types.map(t => t.type.name).join(", ")} </p>
        `;
    } catch (error) {
        infoContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});