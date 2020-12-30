var user, pasword;
//alert( user );
$("#user").focus(function () {
    if( $(this).val() == " Usuario" ){
        $(this).val("").css("color", "black");;
    }
});
$("#password").focus(function () {
    if( $(this).val() == " Contraseña" ){
        $(this).val("").attr("type", "password").css("color", "black").css("font-size", "20px");
       // $(this).attr("type", "password").css("color", "black");
        
    }
});
$("#user").focusout(function () { 
    if( $(this).val() == "" ){
        $(this).val(" Usuario").css("color", "rgb(129, 129, 129)");  
    }
});
$("#password").focusout(function () { 
    if( $(this).val() == "" ){
        $(this).val(" Contraseña").css("color", "rgb(129, 129, 129)").attr("type", "text").css("font-size", "20px");
    }
});


$("#enter").click( function() {
       
    user = $("#user").val();
    pasword = $("#password").val();
    
  //  alert( user );
   // console.log( user );
    //alert ( pasword );

    if ( $.cookie(user) == null ){
        alert( "Su usuario no esta registrado" );
    }
        else if( $.cookie( "psw" + user ) != pasword ){
            alert( "Su contraseña esta incorecta" );
        }
            else{
                $.cookie( "user", user );
                $("#enter").attr( "formtarget", "_self" );
                $("#enter").attr( "formaction", "shop.html" );
             }
});
/*$("#enter").mouseover(function () { 
    $("#enter").css("background-color", "black");
});/** */
