const btnCollapseNavMenu = document.querySelector("#btn-collapse-nav-menu");
const menuNavigation = document.querySelector(".menu-navigation");
const btnclosenavMenu = document.querySelector("#btn-close-nav-menu");

btnCollapseNavMenu.addEventListener('click', ()=>{
    menuNavigation.classList.remove('dp-none');

    btnclosenavMenu.addEventListener('click',()=>{
        menuNavigation.classList.add('dp-none');
    })
}) 

