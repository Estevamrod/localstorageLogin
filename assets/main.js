var btnCon = document.querySelector("#btnCon");
let data = []; //array principal
//
//
function clearInputs() {
    var email = document.querySelector("#email").value = '';
    var senha = document.querySelector("#senha").value = '';
}
//
btnCon.onclick = function () {
    var user_email = document.querySelector("#email").value;
    var user_senha = document.querySelector("#senha").value;
    //
    if (user_email == "" || user_senha == "") {
        alert("Voce esqueceu de preencher um dos campos");
    } else {
        //
        const loc_userdata = localStorage.getItem('user');
        data = JSON.parse(loc_userdata);
        //
        if (localStorage.length != 0) {
            for (var i = 0; i < data.length; i++) {
                const data_user = data;
                const value_email = data_user[i]['email'];
                const value_senha = data_user[i]['senha'];
                const value_nome = data_user[i]['nome'];
                //
                if (user_email == value_email && user_senha == value_senha) {
                    var result_email = value_email;
                    var result_password = value_senha;
                    var result_name = value_nome
                }
                //
            }
            if (user_email == result_email && user_senha == result_password) {
                console.log("from array data, we get email, password and the user's name");
                console.log("email: " + result_email + "\n" +"senha: " + result_password + "\n" + "nome: " + result_name);
                alert("Seja Bem-vindo " + "' " + result_name + " '");
            } else {
                alert("Voce preencheu um dos campos incorretamente!");
            }
        } else {    
            alert("ERRO 500"); //Internal Server Error => memoria vazia (localstorage)
            window.location.href = "cadastro.html";
        }
        clearInputs();
    }
}