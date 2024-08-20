$(document).ready(function () {
    /* alert('efectos') */
    var caja = $("#caja");

    //El boton "mostrar" permanece oculto
    $("#mostrar").hide();

    //Aparece el boton ocultar cuando le doy click se oculta la caja y dicho boton
    //y visceversa
    $("#mostrar").click(function () {
        $(this).hide();
        $("#ocultar").show();
        /* $("#caja").show('fast'); */
        caja.fadeIn('slow')
    });

    $("#ocultar").click(function () {
        $(this).hide();
        $("#mostrar").show();
        /*  $("#caja").hide('fast'); */
        caja.fadeOut('slow');
    });


    $("#animar").click(function () {
        caja.animate({
            marginLeft:
                "500px",
            fontSize: "40px",
            height: "110px"
        },
            "slow")
            .animate({
                borderRadius: "900px",
                marginTop: "80px"
            }, "slow")
            .animate({
                borderRadius: "0px",
                marginLeft: "0px"
            }, "slow")
            .animate({
                borderRadius: "100px",
                marginTop: "0px"
            }, "slow")

    })
            
})