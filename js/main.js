document.addEventListener("DOMContentLoaded", ()=>{

    document.addEventListener("click", e =>{
        if(e.target.classList.contains("menu__btn")){
            const btnMenu = e.target.parentNode.querySelector(".menu__btn");
            const menu = e.target.parentNode.querySelector(".nav");

            //Cerrar menu
            if(btnMenu.classList.contains("active")){
                btnMenu.classList.remove("active")
                btnMenu.classList.add("close");
                menu.classList.remove("active");
                //Abrir menu
            }else{
                btnMenu.classList.remove("close")
                btnMenu.classList.add("active");
                menu.classList.remove("active");
                menu.classList.add("active");
            }
        }
    })





});//DOMContentLoaded