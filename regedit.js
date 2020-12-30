var user, psw, validate_user, validate_psw;


$("#i1").focus(function () { 
    if ( $(this).val() == " Usuario" ){
        $(this).val("").css( "color", "black" );
    }
});
$("#i2").focus(function () {
    if ( $(this).val() == " Contraseña" ){
        $(this).val("").css( "color", "black" ).attr("type", "password");
    }
});

$("#i1").focusout(function () { 
    if( $(this).val() == "" ){
        $(this).val(" Usuario").css("color", "rgb(129, 129, 129)");
    }
});
$("#i2").focusout(function () { 
    if( $(this).val() == "" ){
        $(this).val(" Contraseña").css("color", "rgb(129, 129, 129)").attr("type", "text");
    }
});

$("#registrar").click( function() {
    user = $("#i1").val();
    psw = $("#i2").val();
   // alert( "user :" + user +  " " + " password: " + psw );
    if ( user == "" || psw == "" || user == " Usuario" || psw == " Contraseña" ){alert ( "Introdusca un usuario y/o contraseña válido" );}
        else if ( $.cookie( user ) == null){
            $.cookie( user, user, { path : '/' } );
            $.cookie( 'psw' + user, psw, { path : '/' } );
            //alert( $.cookie(user)  );
            alert ( "Usted ha sido registrado satisfactoriamente" );
            }
            else{
                alert (  "Ya este usuario ha sido registrado" ) ;
            }
});