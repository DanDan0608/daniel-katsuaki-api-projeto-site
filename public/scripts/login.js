function exibirCadastro() {
    var signupForm = document.getElementsByClassName("signup");
    signupForm[0].style.visibility = "visible";
}

function exibirLogin() {
    var signupForm = document.getElementsByClassName("signup");
    signupForm[0].style.visibility = "hidden";
}

// function cadastre() {
//     login.style.display = 'none';
//     cadastro.style.display = 'block';
// }

// function tenho_conta() {
//     login.style.display = 'block';
//     cadastro.style.display = 'none';
// }

// function show_login() {
//     var senha = document.getElementById("senha_login");

//     if (senha.type == "password") {
//         senha.type = "text";
//     } else { senha.type = "password" };
// }

// function show_cadastro() {
//     var senha = document.getElementById("senha_cadastro");

//     if (senha.type == "password") {
//         senha.type = "text";
//     } else { senha.type = "password" };
// }

// function entrar() {

//     var user = usuario.value;
//     var pass = senha_login.value;

//     if (user == 'admin' && pass == 'urubu100') {

//         window.location.href = "area-cliente.html";

//     } else if (user == '' || pass == '') {

//         alert('Preencha todos os campos');

//     } else {

//         alert('Usuário ou senha estão incorretos');

//     }

// }

// function criar() {

//     var user = email.value;
//     var pass = senha_cadastro.value;

//     var position1 = user.indexOf('@');
//     var position2 = user.indexOf('.com');

//     if (position1 >= '0' && position2 > position1 && pass.length >= 8 && user != "") {

//         alert('Registrado com sucesso, entraremos em contato!');

//         tenho_conta();

//     } else {

//         alert(`Preencha todos os campos corretamente, lembrando 
// que a senha deve conter pelo menos 8 dígitos!`);

//     }
// }