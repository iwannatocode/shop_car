//const axios = require('axios').default;

var user, array=[], cant_poke = 0, kk = 1;

user = $.cookie( "user" );
$("#user").text( "Bienvenido " + user );
$("#buy_button").click( pasar_shoping );

//cant de pokemon
$("#refresh").click(function () {
   // $(this).attr( "src", "icon/refresh4.png");
   
    cant_poke = $("#cant_poke").val();
   
    if( isNaN( cant_poke ) == true || cant_poke == "" ) {alert( "Introdusca un numero valido" );}
    else{

    axios.get( "https://pokeapi.co/api/v2/pokemon" )
        .then( function ( response ) {
            alert( "ok" );
        const poke = response.data.results;    
        console.log( poke );
        // arreglar limite de i
        for ( var i = 0 ; i < cant_poke ; i++ ){
            $("#table").append( "<tr class = 'center'> "+
                                    "<td>"+  poke[i].name +  "</td>"+
                                    "<td> <img class='unmove' id='imag"+(i+1)+"' src='https://raw.githubusercontent.com/PokeAPI/sprites/"+
                                    "master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/"+
                                    (i+1) + ".png'> </td>"+
                                    "<td><button class='btn btn_unmove' data-num='"+(i+1)+"' >Unselected</button></td>"+
                                "</tr>"
            );
        }   
        $(".btn").click( function(){ 
            var a = $(this).data("num");
            if ( array[a] == 1){
                $(this).text( 'Unselected' ).attr( "class", "btn  btn_unmove");
                $("#imag" + a ).attr( "src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/"+a+".png");
                $("#imag" + a ).attr( "class", "unmove");
                
                array[a] = 0;
            }
            else{
                $(this).text( 'Selected' ).attr( "class", "btn  btn_move");
                $("#imag" + a ).attr( "src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+a+".gif");
                $("#imag" + a ).attr( "class", "move");
               
            // $("#imag" + a ).removeAttr( "class", "move");
                array[a] = 1;
            }
        });

    });
    }
});

// arreglar limite de i
function pasar_shoping(){
    var list_shop_one_digit = "", list_shop_two_digit = "";
    for( var i = 0 ; i < cant_poke ; i++ ){
        if( array[i] == 1 ){
            if( i < 10 ) { list_shop_one_digit += (''+i+'');}
            else{ list_shop_two_digit += (''+i+'');}
        }
    }
    //alert( list_shop );
    $.removeCookie( "list_shop_one_digit" );
    $.removeCookie( "list_shop_two_digit" );
    $.cookie( "list_shop_one_digit", list_shop_one_digit );
    $.cookie( "list_shop_two_digit", list_shop_two_digit );
}
//refresh
/*
$("#refresh").mouseenter(function () { 
    $(this).attr( "src", "icon/refresh2.png" );
});
$("#refresh").mouseleave(function () { 
    $(this).attr( "src", "icon/refresh.png" );
});*/

