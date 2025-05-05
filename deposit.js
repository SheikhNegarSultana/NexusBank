function deposit(){
    const currentAmount = document.getElementById('currentAmount');
    const monthlyDeposit = document.getElementById('monthlyDeposit');
    const depositBtn = document.getElementById('depositBtn');
    const depositAmount = document.getElementById('depositAmount');
    const depositPin = document.getElementById('depositPin');

    const currentAmountValue = parseFloat(currentAmount.innerText);
    const monthlyDepositValue = parseFloat(monthlyDeposit.innerText);

    depositBtn.addEventListener('click',(event)=>{
        event.preventDefault();

    const depositAmountValue = parseFloat(depositAmount.value);
    const depositPinValue = parseInt(depositPin.value);

    if(depositAmountValue > 0){
        if(depositPinValue === 1234){
            const newBalance = currentAmountValue + depositAmountValue;
            const newMonthlyDepositAmount = monthlyDepositValue + depositAmountValue;
            currentAmount.innerText = newBalance;
            monthlyDeposit.innerText = newMonthlyDepositAmount;
        }

        else{
            alert('Invalid Pin');
        }
    }

    else{
        alert('Please enter a valid amount');
    }

    })
}
deposit();