$(document).ready(function(){

//Mouse Over y Mouse Out
var caja = $("#caja");

//$(this) sobre la variable a la que se aplica el evento
/* caja.mouseover(function(){
    $(this).css("background", "red");
});

caja.mouseout(function(){
    $(this).css("background", "green")
})  */ 

function cambiaRojo(){
    $(this).css("background", "red");
};

function cambiaVerde(){
    $(this).css("background", "green")
};

//Hover
//Puedo agregar hasta 2 funciones
caja.hover(cambiaRojo,cambiaVerde);

//Click y Doble click
caja.click(function(){
    $(this).css("background","blue")
           .css("color","white");
})


caja.dblclick(function(){
    $(this).css("background","pink")
           .css("color","yellow");
})


//Focus y Blur
var nombre = $("#nombre");
var datos = $("#datos")

nombre.focus(function(){
    $(this).css("border", "2px solid green");
});

nombre.blur(function(){
    $(this).css("border", "1px solid #ccc");
    $("#datos").text($(this).val()).show();
});

//Mousedown y Mouseup
datos.mousedown(function(){
    $(this).css("border-color", "gray")
})

datos.mouseup(function(){
    $(this).css("border-color", "black")
})

//Mousemove
$(document).mousemove(function(){
    console.log("En X:"+event.clientX)
    console.log("En X:"+event.clientY)

    $("#sigueme").css("left",event.clientX)
    $("#sigueme").css("top",event.clientY)
});


});