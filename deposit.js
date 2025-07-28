function deposit(){
    const currentAmount = document.getElementById('currentAmount');
    const monthlyDeposit = document.getElementById('monthlyDeposit');
    const depositBtn = document.getElementById('depositBtn');
    const depositAmount = document.getElementById('depositAmount');
    const depositPin = document.getElementById('depositPin');
    const descriptionInputDeposit = document.getElementById('descriptionInputDeposit')



    depositBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        
    const currentAmountValue = parseFloat(currentAmount.innerText);
    const monthlyDepositValue = parseFloat(monthlyDeposit.innerText);    
    const depositAmountValue = parseFloat(depositAmount.value);
    const depositPinValue = depositPin.value;
    const descriptionInputDepositValue = descriptionInputDeposit.value;

    if(depositAmountValue > 0){
        if(depositPinValue === 'bank1234'){
            const newBalance = currentAmountValue + depositAmountValue;
            const newMonthlyDepositAmount = monthlyDepositValue + depositAmountValue;
            currentAmount.innerText = newBalance;
            monthlyDeposit.innerText = newMonthlyDepositAmount;

            depositAmount.value = '';
            depositPin.value = '';

            const history = document.getElementById('history');
            const tr = document.createElement('tr');

                const now = new Date();
                const tranTime = now.toUTCString();
            tr.innerHTML =`
                            <td>${tranTime}</td>
                            <td>${descriptionInputDepositValue}</td>
                            <td class="text-green-600">+ ৳${depositAmountValue}</td>
                            <td>Completed</td>
                `;
                history.insertBefore(tr,history.firstChild);


            const dashboardHistory = document.getElementById('dashboardHistory');
            const tr1 = document.createElement('tr');

            const rowCount = dashboardHistory.getElementsByTagName('tr').length;
            const bgColorClass = rowCount % 2 === 0 ? 'bg-gray-90' : 'bg-white';
            tr1.className = bgColorClass;

            tr1.innerHTML =`<td>${tranTime}</td>
                            <td>${descriptionInputDepositValue}</td>
                            <td class="text-green-600">+ ৳${depositAmountValue}</td>
                            <td>Completed</td>
                `;
            dashboardHistory.insertBefore(tr1, dashboardHistory.firstChild);


            }

        else{
            alert('Pin : bank1234');
        }
    }

    else{
        alert('Please enter a valid amount');
    }

    })
}
deposit();