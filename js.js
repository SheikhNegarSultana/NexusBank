function Login(){
    const loginBtn = document.getElementById('Login-btn');
    const accID = document.getElementById('acc-Id');
    const pass = document.getElementById('Password');

    loginBtn.addEventListener('click',(event)=>{
        event.preventDefault();

        const accIDValue = accID.value.trim();
        if(accIDValue.length !== 11){
            alert('Invalid Account ID');
        }
        else{
            const passValue = pass.value.trim();
            if(passValue === "1234"){
                window.location.href = "Dashboard.html"
            }
            else{
                alert('Invalid Password');
                }
        }
    })
}
Login();