function Login(){
    const loginBtn = document.getElementById('Login-btn');
    const accID = document.getElementById('acc-Id');
    const pass = document.getElementById('Password');

    loginBtn.addEventListener('click',(event)=>{
        event.preventDefault();

        const accIDValue = accID.value.trim();
        if(accIDValue.length !== 11){
            alert('Account ID: 12345678901');
        }
        else{
            const passValue = pass.value.trim();
            if(passValue === "bank1234"){
                window.location.href = "Dashboard.html"
            }
            else{
                alert('Use Password : bank1234');
                }
        }
    })
}
Login();