const usernickname = document.querySelector("#usernickname");
const userEmail = document.querySelector("#user-email");
const userPassword = document.querySelector("#user-password");
const btnRegister = document.querySelector("#btn-register");

btnRegister.addEventListener("click", ()=>{
    validateNickname();
    validateEmail();
    validatePassword();

    if((validateNickname() === true && validateEmail() === true &&
        validatePassword() === true)){
            queryIfUserExists()
    }

});

function clearInputs(){
    usernickname.value = '';
    userEmail.value = '';
    userPassword.value = '';
}

function registerUser(){

    localStorage.setItem(`user${localStorage.length + 1}`,JSON.stringify({
        nickname: usernickname.value,
        email: userEmail.value, 
        password: userPassword.value
    }))
    
    clearInputs();

    setTimeout(()=>{
        document.getElementById("div-sucessMessage").style.display = "flex";
    },200)

    setTimeout(()=>{
        window.location.href = "../index.html";
    },1500)
}

function queryIfUserExists(){
    const arrUsers = [];
    let user = '';

    for(let i = 0; i < localStorage.length; i++){
        user = JSON.parse(localStorage.getItem(`user${i + 1}`));
        arrUsers.push(user);
    }
    
    for(let i in arrUsers){
        if(userEmail.value === arrUsers[i].email){
            return errorMessage(document.getElementById("message-inputEmail"), "***Email já cadastrado em outro usuário!")
        } 
        if(usernickname.value === arrUsers[i].nickname){
            return errorMessage(document.getElementById("message-inputNickname"), "***Já existe usuário com esse nickname, por favor, tente outro!")
        }

    }
    return registerUser();

}

function validateNickname(){
    let nickname = usernickname.value;
    const arrName = [];

    if(nickname == ""){
        return errorMessage(document.getElementById("message-inputNickname"), "***Campo vazio! Crie seu nickname(apelido)...");
    } 
        for(let i in nickname){
            arrName.push(nickname[i].charCodeAt()); 
        }
    
        const arrNameFiltrado = arrName.filter((caracter)=>{
            if(caracter >= 48 && caracter <= 57) {
                return caracter;
            }
        })
        
        if(arrNameFiltrado.length == 0){
            console.log(arrNameFiltrado)
            return errorMessage(document.getElementById("message-inputNickname"), "***Preencha seu nickname com pelo menos um número, exemplo: FulanoSilva9");
        } 

        for(let i in nickname){
            if(nickname[i] == " "){
                return errorMessage(document.getElementById("message-inputNickname"), "***Preencha seu nickname sem espaços ")
            }
        }

        
        return true;
}

function validateEmail(){
    let rgx = /\S+@\S+\.\S+/;
    const email = userEmail.value;

    if(email == ""){
        return errorMessage(document.getElementById("message-inputEmail"), "***Campo vazio! Por favor, preencher email.");
    }

    if(!rgx.test(email)){
        return errorMessage(document.getElementById("message-inputEmail"), "***Email com formato inválido! Preencher corretamente: email@exemplo.com");
    }

    return true;
}

function validatePassword(){
    let password = userPassword.value;

    if(password == ''){
        return errorMessage(document.getElementById("message-inputPassword"), "***Campo vazio! Por favor, crie uma senha");
    }

    if(password.length < 8){
        return errorMessage(document.getElementById("message-inputPassword"), "***Senha deve conter no mínimo 8 caracteres!");
    }

    return true;
}

function errorMessage(elementMessage,message){
    elementMessage.classList.add("errMessage");
    elementMessage.innerText == ""
    elementMessage.innerText = message;

    setTimeout(()=>{
        elementMessage.innerText = "";
        elementMessage.classList.remove("errMessage");
    },5000)
}
