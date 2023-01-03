const btnMobile = document.getElementById("nav-mobile");
const iconMenu = document.getElementById("icon-open-menu");

iconMenu.addEventListener("click", ()=>{

    if(document.querySelector("#nav-mobile.disabled")){

        btnMobile.classList.remove("disabled");

    }else{
        btnMobile.classList.add("disabled");
    }
})