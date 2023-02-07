const btnCollapseNavMenu = document.querySelector("#btn-collapse-nav-menu");
const menuNavigation = document.querySelector(".menu-navigation");
const btnclosenavMenu = document.querySelector("#btn-close-nav-menu");
const navFeature = document.querySelector("#nav-feature");
const navCompany = document.querySelector("#nav-company")

btnCollapseNavMenu.addEventListener('click', ()=>{
    menuNavigation.classList.remove('dp-none');

    btnclosenavMenu.addEventListener('click',()=>{
        menuNavigation.classList.add('dp-none');
    })
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

    console.log(divAnchor.classList.contains("dp-none"));
}

navFeature.onclick = ()=>{
    changeArrow(document.getElementById("arrow-feactures"));
    showAndHideDivAnchors(document.getElementById("features-anchors"));
}
navCompany.onclick = ()=>{
    changeArrow(document.getElementById("arrow-company"));
    showAndHideDivAnchors(document.getElementById("company-anchors"));
}

