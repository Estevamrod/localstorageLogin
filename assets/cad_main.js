const btnCad = document.querySelector("#btn_cad");
let userData = [];
//
function addUserData (item) {
    const getEmailInput = item['email'];
    for (var i = 0; i < userData.length; i++) {
        const getEmailfromList = userData[i]['email'];
        if (getEmailInput == getEmailfromList) {
            var result = getEmailfromList
        }
    }
    if (result) {
        alert("Esses dados ja existem!");
        alert("Por favor, digite novos valores");
    } else {
        alert("Cadastro Realizado com sucesso " + "' " + item['nome'] + " '");
        userData.push(item);
        window.localStorage.setItem('user', JSON.stringify(userData));
        window.location.href = 'index.html';
    }
    clearInputs();
}
//
if (localStorage.length != 0) {
    const locate_userData = localStorage.getItem('user');
    userData = JSON.parse(locate_userData);
    console.log(userData);
}
//
function clearInputs() {
    var user_name = document.querySelector("#nome").value = '';
    var user_email = document.querySelector("#email").value = '';
    var user_senha = document.querySelector("#senha").value = '';    
}
//
btnCad.onclick = function () {
    var user_name = document.querySelector("#nome").value;
    var user_email = document.querySelector("#email").value;
    var user_senha = document.querySelector("#senha").value;
    //
    if (user_name == "" || user_email == "" || user_senha == "") {
        alert("Voce precisa preencher todos os campos!");
    } else{
        addUserData({
            email: user_email,
            senha: user_senha,
            nome: user_name
        });
        //
        console.log(userData);
    }
    clearInputs();
}