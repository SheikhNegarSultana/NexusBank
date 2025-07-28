function withdraw(){
    const currentAmount = document.getElementById('currentAmount');
    const monthlyWithdraw = document.getElementById('monthlyWithdraw');
    const withdrawAmount = document.getElementById('withdrawAmount');
    const withdrawPin = document.getElementById('withdrawPin');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const descriptionInputWithdraw = document.getElementById('descriptionInputWithdraw')

    

    withdrawBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        const currentAmountValue = parseFloat(currentAmount.innerText) ;
        const monthlyWithdrawValue = parseFloat(monthlyWithdraw.innerText);
        const withdrawAmountValue = parseFloat(withdrawAmount.value);
        const withdrawPinValue = parseInt(withdrawPin.value);
        const descriptionInputWithdrawValue = descriptionInputWithdraw.value;
        
        if(currentAmountValue > withdrawAmountValue ){

            if(withdrawPinValue === 1234){
                const newCurrentAmount = currentAmountValue - withdrawAmountValue ;
                currentAmount.innerText = newCurrentAmount ;
    
                const newMonthlyWithdraw = monthlyWithdrawValue + withdrawAmountValue ;
                monthlyWithdraw.innerText = newMonthlyWithdraw;

                withdrawAmount.value = '';
                withdrawPin.value = '';

            const history = document.getElementById('history');
            const tr = document.createElement('tr');

                const now = new Date();
                const tranTime = now.toUTCString();
            tr.innerHTML =`
                            <td>${tranTime}</td>
                            <td>${descriptionInputWithdrawValue}</td>
                            <td class="text-red-500">− ৳${withdrawAmountValue}</td>
                            <td>Completed</td>
                `;
                history.insertBefore(tr,history.firstChild);

            const dashboardHistory = document.getElementById('dashboardHistory');
            const tr1 = document.createElement('tr');

            const rowCount = dashboardHistory.getElementsByTagName('tr').length;
            const bgColorClass = rowCount % 2 === 0 ? 'bg-gray-90' : 'bg-white';
            tr1.className = bgColorClass;

            tr1.innerHTML =`<td>${tranTime}</td>
                            <td>${descriptionInputWithdrawValue}</td>
                            <td class="text-red-500">− ৳${withdrawAmountValue}</td>
                            <td>Completed</td>
                `;
            dashboardHistory.insertBefore(tr1, dashboardHistory.firstChild);

            }

            else{
                alert('Pin : 1234');
            }

        }

        else{
            alert('Insufficient balance');
            return;
            }

    })

}
withdraw();