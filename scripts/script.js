const btnCollapseNavMenu = document.querySelector("#btn-collapse-nav-menu");
const menuNavigation = document.querySelector(".menu-navigation");
const btnclosenavMenu = document.querySelector("#btn-close-nav-menu");
const navFeature = document.querySelector("#nav-feature");
const navCompany = document.querySelector("#nav-company")

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
