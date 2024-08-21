$(document).ready(function(){
    //Me permite mover elementos por toda la pantalla
    $(".elemento").draggable(); 

    //Redimensionar los elementos
    $(".elemento").resizable(); 

    //Seleccionar y ordenar elementos
   /*  $(".lista-seleccionable").selectable(); */
    $(".lista-seleccionable").sortable();

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area")
        }
    });

});