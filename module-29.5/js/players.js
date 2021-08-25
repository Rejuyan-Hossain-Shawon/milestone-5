function setStyle(player) {
    player.style.border = "1px solid red";
    player.style.borderRadius = "20px";
    player.style.padding = "10px";
    player.style.margin = "10px";

}

const players = document.getElementsByClassName("player");
for (const player of players) {
    setStyle(player);

}


function addPlayer() {

    const playerContainer = document.getElementById("players");
    const player = document.createElement("div");
    player.classList.add("player");
    player.innerHTML = `
         <h2 class="player-name">NEw player</h2>
        <p>Ab provident culpa iure debitis! Tempore excepturi commodi, accusantium vitae reprehenderit earum
        fugiat unde placeat asperiores animi sint quae porro ex dolorem aspernatur non eius quam dolorum
        ipsum consequatur distinctio?</p>

    `
    setStyle(player);


    playerContainer.appendChild(player);

}

// event bubble 

document.getElementById("players").addEventListener("click", function (event) {

    if (event.target.tagName.toLowerCase() == "div") {
        event.target.style.backgroundColor = "red";
    } else if (event.target.tagName.toLowerCase() == "h2") {
        event.target.style.backgroundColor = "yellow";
    } else if (event.target.tagName.toLowerCase() == "p") {
        event.target.parentNode.style.backgroundColor = "red";
    }
})