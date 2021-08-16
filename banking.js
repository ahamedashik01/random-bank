// deposite amount event handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    let depositeInputText = depositeInput.value;
    const newDepositAmount = parseFloat(depositeInputText);
    const prevDepositeInput = document.getElementById('total-deposit');
    const prevDepositeInputText = prevDepositeInput.innerText;
    const prevDepositeAmount = parseFloat(prevDepositeInputText);
    const totalDepositAmout = newDepositAmount + prevDepositeAmount;
    prevDepositeInput.innerText = totalDepositAmout;
    const totalBalanceInput = document.getElementById('total-balance');
    const totalBalanceInputText = totalBalanceInput.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceInputText);
    const newTotalBalance = totalBalanceAmount + newDepositAmount;
    totalBalanceInput.innerText = newTotalBalance;
    // clear the deposite input field
    depositeInput.value = '';
});

// withdraw amout event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);
    const totalWithdrawInput = document.getElementById('total-withdraw')
    const totalWithdrawInputText = totalWithdrawInput.innerText;
    const totalWithdrawAmount = parseFloat(totalWithdrawInputText);
    const newTotalWidthDrawAmount = withdrawAmount + totalWithdrawAmount;
    totalWithdrawInput.innerText = newTotalWidthDrawAmount;
    const totalBalanceInput = document.getElementById('total-balance');
    const totalBalanceInputText = totalBalanceInput.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceInputText);
    const newTotalBalance = totalBalanceAmount - withdrawAmount;
    totalBalanceInput.innerText = newTotalBalance;
    // clear the deposite input field
    withdrawInput.value = '';

});