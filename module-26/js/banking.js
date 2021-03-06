function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = "";
    return amountValue;


}

function updateTotalField(totalFieldId, depositAmount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);


    totalElement.innerText = depositAmount + previousTotal;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

}


function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    /* 
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
         */
    const previousBalanceTotal = getCurrentBalance();


    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;

    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}




document.getElementById("deposit-button").addEventListener("click", function() {
    // deposit input
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField("deposit-total", depositAmount);

        updateBalance(depositAmount, true);

    }



    // get current deposit
    /* const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);


    depositTotal.innerText = depositAmount + previousDepositTotal; */

    // update balance 
    /* 
    const balanceTotal = document.getElementById("balance-total");

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);


    balanceTotal.innerText = previousBalanceTotal + depositAmount;
 */






})


// handle withdraw button 
document.getElementById("withdraw-button").addEventListener("click", function() {
    // withdraw input
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');
    const CurrentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && CurrentBalance > withdrawAmount) {
        updateTotalField("withdraw-total", withdrawAmount);

        updateBalance(withdrawAmount, false);


    }
    if (CurrentBalance < withdrawAmount) {
        console.log(alert('You dont have soo much moneey'))
    }



    // update withdraw total
    /*  const withdrawTotal = document.getElementById('withdraw-total');
     const previousWithdrawTotalText = withdrawTotal.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
 
 
     withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */



    // update balance after withdraw
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);


    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; 
    */



})