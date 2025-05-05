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
    
}
modals();