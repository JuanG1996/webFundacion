document.addEventListener("DOMContentLoaded", ()=>{


    //*****Variables******/
    // Contenedor principal (no mover)
    let adoptameSlider = document.querySelector(".slider");
     // Conenedor de items
     let adoptameContainerItems= adoptameSlider.querySelector(".slider-items");
    // Array de items
    let adoptameItems = adoptameSlider.querySelectorAll(".item-container");

    // Flechas
    let adoptameLeft = adoptameSlider.querySelector(".slider-left i");
    let adoptameRight = adoptameSlider.querySelector(".slider-right i");

    //width Contenedor de items
    let tamanoContenedor;
    //Posicion actual del slider
    let posicionActual = 0;
    //width de items
    let tamanoItem;
    //cantidad de items en slider
    let numeroItems = adoptameItems.length;

    //*****Funciones******/
    function setItemWidth(){
        let tamanoActual = window.innerWidth;
        
        adoptameItems.forEach(item =>{
            if(tamanoActual < 768){
                tamanoItem = tamanoActual;
                
            }else if(tamanoActual < 1100){
                tamanoItem = tamanoActual / 2;
                
            }else{
                tamanoItem = tamanoActual / 3;
            }
            //tamano de item
            item.style.width = tamanoItem + "px";
        });

        
        //Tamano del contenedor de items
        tamanoContenedor = adoptameItems.length * tamanoItem;
        adoptameContainerItems.style.width = tamanoContenedor + "px";

        moverSlider();
       
    }

    function moverSlider(){
        //Margin del contenedor de items
        adoptameContainerItems.style.marginLeft = "-" + (tamanoItem * posicionActual) + "px";
    }
    

    //*****AddEventListeners******/
    //Colocar medidas al slider
    setItemWidth();
    window.addEventListener("resize", setItemWidth);
    

    //Botonones de slider
    adoptameRight.addEventListener("click", ()=>{
        if(posicionActual < numeroItems - 1){
            posicionActual +=1;
            moverSlider();
            console.log("todavia");
        }else{
            console.log("ya no");
            
        }
    });

    adoptameLeft.addEventListener("click", ()=>{
        if(posicionActual >= 1){
            posicionActual -=1;
            moverSlider();
            console.log("todavia");
        }else{
            console.log("ya no");
            
        }
    });

    
botonCuadro = document.querySelector("prueba-cuadro");
cuadro = document.querySelector("prueba");
botonCuadro.addEventListener("click", () =>{
    cuadro.style.display = "none"; 
});

});


