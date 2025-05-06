function withdraw(){
    const currentAmount = document.getElementById('currentAmount');
    const monthlyWithdraw = document.getElementById('monthlyWithdraw');
    const withdrawAmount = document.getElementById('withdrawAmount');
    const withdrawPin = document.getElementById('withdrawPin');
    const withdrawBtn = document.getElementById('withdrawBtn');

    

    withdrawBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        const currentAmountValue = parseFloat(currentAmount.innerText) ;
        const monthlyWithdrawValue = parseFloat(monthlyWithdraw.innerText);
        const withdrawAmountValue = parseFloat(withdrawAmount.value);
        const withdrawPinValue = parseInt(withdrawPin.value);
        
        if(currentAmountValue > withdrawAmountValue ){

            if(withdrawPinValue === 1234){
                const newCurrentAmount = currentAmountValue - withdrawAmountValue ;
                currentAmount.innerText = newCurrentAmount ;
    
                const newMonthlyWithdraw = monthlyWithdrawValue + withdrawAmountValue ;
                monthlyWithdraw.innerText = newMonthlyWithdraw;

                withdrawAmount.value = '';
                withdrawPin.value = '';
            }

            else{
                alert('Invalid Pin');
            }

        }

        else{
            alert('Insufficient balance');
            return;
            }

    })

}
withdraw();