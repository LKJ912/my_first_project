//scroll事件
$( window ).scroll( function( ){
	var sTop = $( "body,html" ).scrollTop( ) ;
	if( sTop > 100 ){
		$( ".scroll_left" ).css( "display" , "block" ) ;
		$( ".scroll_right" ).css( "display" , "block" ) ;
	}else{
		$( ".scroll_left" ).css( "display" , "none" ) ;
		$( ".scroll_right" ).css( "display" , "none" ) ;		
	}
})
$( ".scroll_right .f" ).click( function( ){
	$( "body,html").animate( { scrollTop : 0 } , 1000 ) ;
})
$( ".shop_car" ).click( function( ){
	location.href = "shopcar.html" ;
})

var brr = getCookie( "shoplist" ) ;
if( brr.length != 0 ){
	$( ".stuff" ).css( "display" , "none" ) ;
	$( ".shop_box" ).css( "display" , "block" ) ;
}else{
	$( ".stuff" ).css( "display" , "block " ) ;
	$( ".shop_box" ).css( "display" , "none" ) ;
}
//console.log( brr ) ;
var conStr = $( ".tab" ).html( ) ;
for( var i = 0 ; i < brr.length ; i++ ){
	var shopin = brr[ i ] ;
	conStr += `<tr class="rows">
					<td><input type="checkbox" class="qx"/></td>
					<td><img src="${shopin.src}"/><p>${shopin.name}</p></td>
					<td>${shopin.price}</td>
					<td class="number"><span class="numb" data-num = "-1" >－</span><span class="shop_count">${shopin.count}</span><span class="numb" data-num = "1" >+</span></td>                                                                                                             
					<td class="money">${shopin.price*shopin.count}</td>
					<td class="del">删除</td>
				</tr>` ;
}
$( ".tab" ).html( conStr ) ;
//全选功能
$( "#qxAll" ).click(function( ){
	$( ".qx" ).prop( "checked" , $( this ).prop( "checked" ) ) ;
	jiesuan( ) ;
})

//结算函数
function jiesuan( ){
	var count = 0 ;
	var money = "￥" ;
	$( ".qx:checked" ).each( function( ){
		count += Number( $( this ).parent( ).parent( ).find( ".shop_count" ).html( ) ) ;
		money += parseInt( $( this ).parent( ).parent( ).find( ".money" ).html( ) ) ;
		console.log( $( ".money" ).html( ) ) ;
	})
	$( ".jsuan .ll" ).html( count ) ;
	$( ".jsuan .lr" ).html( money ) ;
	//console.log( money ) ;
}
