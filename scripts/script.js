const btnCollapseNavMenu = document.querySelector("#btn-collapse-nav-menu");
const menuNavigation = document.querySelector(".menu-navigation");
const btnclosenavMenu = document.querySelector("#btn-close-nav-menu");
const navFeature = document.querySelector("#nav-feature");
const navCompany = document.querySelector("#nav-company");
const btnLogin = document.querySelector("#btn-login");

window.addEventListener("load",()=>{
    const arrUsers = [];

    for(let i = 0; i < localStorage.length; i++){
        arrUsers.push(JSON.parse(localStorage.getItem(`user${i+1}`)))
    }

    for(let i in arrUsers){
        if(arrUsers[i].logon === true){
            return loggedUser(arrUsers[i].nickname);
        }
    }
})

function loggedUser(username){
    const menu = document.getElementById("menu");
    document.getElementById("btn-register").style.display = "none";
    btnLogin.style.display = "none";

    const btnLogout = document.createElement("button");
    btnLogout.classList.toggle("btn-logout");
    btnLogout.innerHTML = "logout"
    menu.appendChild(btnLogout);
    
    const log_user = document.createElement("h2");
    log_user.classList.toggle("loggedUser");
    menu.appendChild(log_user);

    log_user.innerHTML = `${username}`;

    btnLogout.addEventListener("click",()=>{
        const arrUsers = [];

        for(let i = 0; i < localStorage.length; i++){
            arrUsers.push(JSON.parse(localStorage.getItem(`user${i+1}`)))
        }

        
        localStorage.clear();
        
        for(let i = 0; i < arrUsers.length; i++){
            if(arrUsers[i].logon === true){
                arrUsers[i].logon = false;
            }
            localStorage.setItem(`user${i+1}`, JSON.stringify({
                nickname: arrUsers[i].nickname,
                email: arrUsers[i].email, 
                password: arrUsers[i].password,
                logon: arrUsers[i].logon
            }));
        }


        exitLogout();

        return setTimeout(()=>{
            document.location.reload(true);
        },1000) 
    })
}

function exitLogout(){
    const divExit = document.createElement("div");
    divExit.classList.add("divExit")
    divExit.innerHTML = "Exit..."

    document.body.appendChild(divExit);
}


btnCollapseNavMenu.addEventListener('click', ()=>{
    menuNavigation.classList.remove('dp-none');
    
    btnclosenavMenu.addEventListener('click',()=>{
        menuNavigation.style.webkitAnimation = "hide-slide 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards";
        menuNavigation.style.animation = "hide-slide 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards";

        setTimeout(()=>{
            if(!menuNavigation.classList.contains('dp-none')){
                menuNavigation.classList.add('dp-none');
            }
        },700);
    })
    menuNavigation.style.animation = "";

}) 


function changeArrow(arrow){
    
    if(arrow.classList.contains("arrow-down")){
        arrow.src = "./images/icon-arrow-up.svg";
        arrow.classList.remove("arrow-down");
    } else {
        arrow.src = "./images/icon-arrow-down.svg";
        arrow.classList.add("arrow-down");
    }
}

function showAndHideDivAnchors(divAnchor){

    if(divAnchor.classList.contains("dp-none")){
        divAnchor.classList.remove("dp-none");
        divAnchor.classList.add("dp-flex");
    } else {
        divAnchor.classList.remove("dp-flex");
        divAnchor.classList.add("dp-none")
    }
}

navFeature.onclick = ()=>{
    changeArrow(document.getElementById("arrow-feactures"));
    showAndHideDivAnchors(document.getElementById("features-anchors"));
}
navCompany.onclick = ()=>{
    changeArrow(document.getElementById("arrow-company"));
    showAndHideDivAnchors(document.getElementById("company-anchors"));
}

window.addEventListener("load",()=>{
    changeHeroImageSection();
})

window.addEventListener("resize",()=>{
   changeHeroImageSection();
})

function changeHeroImageSection(){
    if(window.innerWidth >= 870){
        document.getElementById("back-image").src = "./images/image-hero-desktop.png";
        menuNavigation.style.animation = "show-slide-left 200ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    } else {
        document.getElementById("back-image").src = "./images/image-hero-mobile.png"
    }
}

btnLogin.addEventListener("click",()=>{
    window.location.href = "./loginScreen/login.html";
})

function learnMore(){
    document.getElementById("learn-more").classList.remove("dp-none");
}

function closeLearnMore(){
    document.getElementById("learn-more").classList.add("dp-none");
}

function controlAccessToFeatures(){
    const users = [];

    for(let i = 0; i < localStorage.length; i++){
        users.push(JSON.parse(localStorage.getItem(`user${i+1}`)))
    };

    for(let i = 0; i < localStorage.length; i++){
        if(users[i].logon == true){
            window.location.href = "#";
        } else {
            alert("Por favor, efetuar login...")
            window.location.href = "./loginScreen/login.html";
        }
    };
}