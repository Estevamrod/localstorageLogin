const btnCad = document.querySelector("#btn_cad");
let data = [];
//
function addData (item) {
    data.push(item);
    window.localStorage.setItem('user', JSON.stringify(data));
}
function clearInputs() {
    var user_name = document.querySelector("#nome").value = '';
    var user_email = document.querySelector("#email").value = '';
    var user_senha = document.querySelector("#senha").value = '';    
}
//
if (localStorage.length != 0) {
    const loc_userdata = localStorage.getItem('user');
    data = JSON.parse(loc_userdata);
    console.log(data);
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
        //
        addData({
            email: user_email,
            senha: user_senha,
            nome: user_name
        });
        //  
        alert("Cadastro realizado com sucesso!");
        document.querySelector("#btn_cad").disabled = true;
        window.location.href = 'index.html';
        console.log(data);
    }
    clearInputs();
}