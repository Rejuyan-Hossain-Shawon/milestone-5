const blueBtn = document.getElementById('blueButton');
blueBtn.onclick = makeBlue;


function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

// direct event listener adding 

// simple way 
const goldenButtonHandler = document.getElementById("goldenButton");
goldenButtonHandler.addEventListener("click", function() {
        document.body.style.backgroundColor = "gold";
        console.log(goldenButtonHandler);
    })
    // shortcut way to adding event lisenter

document.getElementById("grayButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "gray";
})


// update button handler work

document.getElementById('update-btn-handler').addEventListener('click', function() {
        document.getElementById('p-text').innerText = "updated by event listenter";
    })
    // update button handler work with input field

document.getElementById('update-btn-handler').addEventListener('click', function() {
    let input = document.getElementById('input-field');
    document.getElementById('p-text').innerText = input.value;
    input.value = "";
})