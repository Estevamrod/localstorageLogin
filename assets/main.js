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
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;
    //
    if (email == "" || senha == "") {
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
                if (email == value_email && senha == value_senha) {
                    var user_email = value_email;
                    var user_password = value_senha;
                    var user_name = value_nome
                }
                //
            }
            if (email == user_email && senha == user_password) {
                console.log("from array data, we get email, password and the user's name");
                console.log("email: " + user_email + "\n" +"senha: " + user_password);
                alert("Seja Bem-vindo " + "' " + user_name + " '");
            } else {
                alert("Voce preencheu um dos campos incorretamente!");
            }
        } else {    
            alert("ERRO 274");
            window.location.href = "cadastro.html";
        }
        clearInputs();
    }
}