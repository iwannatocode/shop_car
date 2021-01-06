var list_shop_one_digit, list_shop_two_digit, tabla, num_poke, cont = 0, user;

list_shop_one_digit = $.cookie( "list_shop_one_digit" );
list_shop_two_digit = $.cookie( "list_shop_two_digit" );
user = $.cookie( "user" );
$("#user").text( "Bienvenido " + user );
alert( "this are one-->" + list_shop_one_digit );
alert( "this are two-->" + list_shop_two_digit );

for(var i = 0 ; i < list_shop_one_digit.length ; i++ ){
    
    if ( cont == 5 ){
        $("#tabla_shop").append( "<tr></tr>" );
        cont = 0;
    }
    tabla = `<td> <img id="imag${list_shop_one_digit[i]}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${list_shop_one_digit[i]}.gif">
            </td>`;
    
    $("#tabla_shop tr:last-child").append( tabla);
    cont++;
}
for(var i = 0 ; i < list_shop_two_digit.length ; i++ ){
    
    if ( cont == 5 ){
        $("#tabla_shop").append( "<tr></tr>" );
        cont = 0;
    }
    tabla = `<td> <img id="imag${list_shop_two_digit[i] + list_shop_two_digit[i+1]}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${list_shop_two_digit[i]+list_shop_two_digit[i+1]}.gif">
            </td>`;
    
    $("#tabla_shop tr:last-child").append( tabla);
    cont++;
    i++;
}
