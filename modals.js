function modals(){
    // Deposit Modal
    const depositModal = document.getElementById('depositModal');
    const closeDepositBtn = document.getElementById('closeDepositBtn');

    function openDepositModal() {
        depositModal.classList.add('modal-open');
    }

    function closeDepositModal() {
        depositModal.classList.remove('modal-open');
    }
    
    document.querySelectorAll('a[href="#deposit"]').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            openDepositModal();
        });
    });
    
    closeDepositBtn.addEventListener('click', function(event) {
        event.preventDefault();
        closeDepositModal();
    });

    // Withdraw Modal Start
    const withdrawModal = document.getElementById('withdrawModal');
    const closeWithdrawBtn = document.getElementById('closeWithdrawBtn');

    function openWithdrawModal() {
        withdrawModal.classList.add('modal-open');
    }

    function closeWithdrawModal() {
        withdrawModal.classList.remove('modal-open');
    }
    
    document.querySelectorAll('a[href="#withdraw"]').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            openWithdrawModal();
        });
    });

    closeWithdrawBtn.addEventListener('click', function(event) {
        event.preventDefault();
        closeWithdrawModal();
    });


    // Transaction Modal Start
    const transactionsModal = document.getElementById('transactionsModal');
    const closeTransactionBtn = document.getElementById('closeTransactionBtn');

    function openTransactionsModal() {
    transactionsModal.classList.add('modal-open');}
    
    function closeTransactionsModal() {
    transactionsModal.classList.remove('modal-open');}

    document.querySelectorAll('a[href="#transactions"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        openTransactionsModal();
    });
});

    closeTransactionBtn.addEventListener('click', function(event) {
        event.preventDefault();
        closeTransactionsModal();
    });

    
}

modals();