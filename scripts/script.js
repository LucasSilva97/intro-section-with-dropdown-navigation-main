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

const divStory = document.createElement("div");
document.body.appendChild(divStory);

function closeDivStory(div){
    div.style.display = "none";
}
document.getElementById("history").addEventListener("click",()=>{
    

    divStory.innerHTML = `<div class="story_snap" id="story" style="display: flex;">
    <button onclick="closeDivStory(story)" id="story_close">close</button>
    
    <div class="story_section">
    <h3 class="story_subtitle">Story</h3>
    <p>
    Founded in 2002, we have been in this segment for over 20 years, 
    bringing the best services in the market on our website, through our blog.
    We have the best services for our business partners, here feel free to enjoy our services, 
    here you are our partner.
    </p>
    <h3 class="story_subtitle">Differential</h3>
    <p>
    We are a prominent company in the market, receiving the award, twice in a row, 
    as the best company in America. We bring service in our own way, always trying 
    to serve our customers in a flexible way.
    </p>
        <h3 class="story_subtitle">Mission</h3>
        <p>
          We have the mission of delivering maximum value to our partners and customers. 
          May they always feel "at home" when they enter our site. 
          We have an easy payment system, bringing maximum comfort to our partners.
          </p>
          <h3 class="story_subtitle">Vision</h3>
          <p>
          Helping businesses and our consumers thrive in a sustainable economy where people, 
          profits and planets are in balance. Our vision is to grow our business, 
          while decoupling growth from our environmental footprint and increasing positive social impact.
          </p>
          <h3 class="story_subtitle">Our principles</h3>
          <p>
            <ul class="principles-list">
                    <li class="principle">Responsibility</li>
                    <li class="principle">Commitment</li>
                    <li class="principle">Diversity</li>
                    <li class="principle">Innovation</li>
                    <li class="principle">Honesty</li>
                </ul>
            </p>
            <h3 class="story_subtitle">Causes we support</h3>
            <p>
                <ul class="causes-list">
                    <li class="cause">Social responsability</li>
                    <li class="cause">Tax Responsibility</li>
                    <li class="cause">Legality</li>
                    <li class="cause">Sustentabilidade</li>
                </ul>
            </p>
            <a href="#"><h4>Meet our team</h4></a>
            </div>
            </div>`;
            
            return divStory;
        })
        