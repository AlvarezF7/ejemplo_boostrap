//let nombre = prompt("ingresa tu nombre"); //esta es la variable que almacena la info//

//function saludo(name){        //esta es la funcion
  //  alert("Bienvenid@," + name);
//}
 //saludo (nombre); // aqui debe llamar a la variable 

// dar la función de scroll a un boton
function scrollBtn (){
 const btnTop = document.getElementById("btnTop");   //row es el div que contiene las cards
 if (btnTop) {
    btnTop.addEventListener("click", () => {
        window.scrollTo({ top:0, behavior:"smooth"});    
    });
  }  
} 


//este codigo es necesario para que el DOM esté cargado antes de buscar el botón
document.addEventListener("DOMContentLoaded", scrollBtn);


   




 