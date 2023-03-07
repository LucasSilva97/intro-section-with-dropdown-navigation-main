
const user = document.getElementById("user");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", ()=>{

    if(user.value == "" || password.value == ""){
        return errorMessage(document.getElementById("message-error"), "***Verifique se os campos estãos preenchidos");
    }

    const users = [];
    let parseUser = ''
    
    for(let i = 0; i < localStorage.length;i++){
        parseUser = JSON.parse(localStorage.getItem(`user${i+1}`));
        users.push(parseUser);
    }

    let registeredUser = '';
    let registeredPassword = '';
    let verifiedUser = '';
    
    for(let i = 0; i < localStorage.length; i++){
        if(user.value == users[i].nickname || user.value == users[i].email){
            registeredUser = true;
            verifiedUser = users[i];
            break; 
        } else {
            registeredUser = false;
        }
    }

    for(let i = 0; i < localStorage.length; i++){
        if(password.value == verifiedUser.password){
            registeredPassword = true;
            break; 
        } else {
            registeredPassword = false;
        }
    }

    if(!registeredUser){
         return errorMessage(document.getElementById("message-inputUser"), "***Email não cadastrado ou usuário não existe");
     } else if (!registeredPassword){
        return errorMessage(document.getElementById("message-inputPassword"), "***Senha incorreta. Tente novamente");
     } else {
          for(let i = 0; i < localStorage.length; i++){
            if(users[i].nickname == verifiedUser.nickname || users[i].nickname == verifiedUser.email){
                verifiedUser.logon = true;
                users[i] = verifiedUser;
            }
            localStorage.setItem(`user${i + 1}`, JSON.stringify(users[i]));
          }
          window.location.href = "../index.html";
     }
})


function errorMessage(elementMessage,message){
    elementMessage.classList.add("errMessage");
    elementMessage.innerText == ""
    elementMessage.innerText = message;

    setTimeout(()=>{
        elementMessage.innerText = "";
        elementMessage.classList.remove("errMessage");
    },5000)
}

function accessHomepage(){
    setTimeout(()=>{
        return window.location.href = "../index.html";
    },1000)
}
