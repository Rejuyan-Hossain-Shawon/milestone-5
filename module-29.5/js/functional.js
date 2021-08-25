function getInputvalue(id) {
    const inputText = document.getElementById(id).value;
    const inputNumber = parseFloat(inputText);
    document.getElementById(id).value = "";
    return inputNumber;

}

function getTextToNumber(id) {
    const text = document.getElementById(id).innerText;
    const number = parseFloat(text);
    return number;
}

function updateField(id, amount) {
    const field = getTextToNumber(id);
    let newField;

    newField = field + amount;


    document.getElementById(id).innerText = newField;


}


function updateTotal() {
    const withdraw = getTextToNumber("withdraw-total");
    const deposit = getTextToNumber("deposit-total");

    const newBalance = 1240 + deposit - withdraw;
    document.getElementById("balance-total").innerText = newBalance;

}

document.getElementById("deposit-button").addEventListener("click", function () {
    const input = getInputvalue("deposit-input");
    if (input > 0) {
        updateField("deposit-total", input);
        updateTotal();
    }

})
document.getElementById("withdraw-button").addEventListener("click", function () {
    const input = getInputvalue("withdraw-input");

    const balance = getTextToNumber("balance-total");
    if (input > 0 && input <= balance) {
        updateField("withdraw-total", input);
        updateTotal();
    }

})