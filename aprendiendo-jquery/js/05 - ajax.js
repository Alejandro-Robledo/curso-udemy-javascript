$(document).ready(function(){
    
//Load
/* $("#datos").load("https://reqres.in/api/users?page=1") */

//Metodo GET y Post
//Obtengo el objeto JSON desde la API
//Creo un bucle y muestro en cada iteracion nombre y apellido de las personas de la pagina 2
$.get("https://reqres.in/api/users", {page: 2}, function(response){
    response.data.forEach((element, index) => {
        $("#datos").append("<p>"+ element.first_name+ " "+element.last_name+"</p>");
    });
});



$("#formulario").submit(function(e){
    e.preventDefault();
    var usuario = {
        name: $('input[name = "name"]').val(),
        web: $('input[name = "web"]').val()
    };
    console.log(usuario);


  /*   //$(this).attr("action") Accedo al formulario y accedo al URL y accedo a los datos
    $.post($(this).attr("action"), usuario, function(response){
        console.log(response)
    
    }); */

    $.ajax({
        type:'POST',
        url:$(this).attr("action"),
        data: usuario,
        beforeSend: function(){
            console.log("Enviando Usuario...");
        },
        succes: function(response){
            console.log(response);
        },
        error: function(){
            console.log("A ocurrido un error");
        },
        timeout:2000
    });

    return false;
});

});