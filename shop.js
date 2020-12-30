//const axios = require('axios').default;

var user, array=[];

user = $.cookie( "user" );
$("#user").text( "Bienvenido " + user );
$("#buy_button").click( pasar_shoping );

axios.get( "https://pokeapi.co/api/v2/pokemon" )
    .then( function ( response ) {
        const poke = response.data.results;    
   // arreglar limite de i
    for ( var i = 0 ; i <= 11 ; i++ ){
        $("#table_shop").append( "<tr class = 'center'> "+
                                "<td>"+  poke[i].name +  "</td>"+
                                "<td> <img class='unmove' id='imag"+(i+1)+"' src='https://raw.githubusercontent.com/PokeAPI/sprites/"+
                                "master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/"+
                                (i+1) + ".png'> </td>"+
                                "<td><button class='btn' data-num='"+(i+1)+"' >Unselect</button></td>"+
                            "</tr>"
        );
    }
    $(".btn").click( function(){ 
        var a = $(this).data("num");
        if ( array[a] == 1){
            $(this).text( 'Unselected' );
            $("#imag" + a ).attr( "src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/"+a+".png");
            $("#imag" + a ).attr( "class", "unmove");
            array[a] = 0;
        }
        else{
            $(this).text( 'Selected' );
            $("#imag" + a ).attr( "src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+a+".gif");
            $("#imag" + a ).attr( "class", "move");
           // $("#imag" + a ).removeAttr( "class", "move");
            array[a] = 1;
        }
    });

});

// arreglar limite de i
function pasar_shoping(){
    var list_shop_one_digit = "", list_shop_two_digit = "";
    for( var i = 0 ; i <= 20 ; i++ ){
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