$(document).ready(function () {
    console.log('Estamos Listos!!!');


    //Selector de ID
    $("#rojo").css("background", "red")
        .css("color", "white");

    $("#amarillo").css("background", "yellow")
        .css("color", "green")


    $("#verde").css("background", "green")
        .css("color", "white")



    //Selectores de clase
   var mi_clase =  $(".zebra").css('padding','5px');
  

   $('.sin_borde').click(function(){
    $(this).addClass('zebra')
    console.log('Click dado')
   })

   //Selector de Etiqueta
   var parrafos = $('p').css('cursor','pointer');

   parrafos.click(function(){
   var that = $(this);
    if(!that.hasClass('grande')){
        that.addClass('grande');
    }else{
        that.removeClass('grande')
    }

   });


   //Selector de etiqueta
   $('[title="Google"]').css('background','#ccc')
   $('[title="Facebook"]').css('background','blue')

   //OTROS
   //Selecciono los parrafos y los enlaces
   /* $('p, a').addClass('margen-superior') */
   var busqueda =  $('#caja.resaltado').eq(0).parent().parent().parent().find('[title = "Google"]');
   console.log(busqueda);
});


