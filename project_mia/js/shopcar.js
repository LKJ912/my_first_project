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
	conStr += `<tr class="rows" data-id = "${shopin.id}">
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
//单击复选框 
$( ".qx" ).click( function( ){
	jiesuan( ) ;
})
//结算函数
function jiesuan( ){
	var count = 0 ;
	var money = 0 ;
	$( ".qx:checked" ).each( function( ){
		count += Number( $( this ).parent( ).parent( ).find( ".shop_count" ).html( ) ) ;
		money += parseInt( $( this ).parent( ).parent( ).find( ".money" ).html( ) ) ;
		console.log( money ) ;
	})
	console.log( money ) ;
	$( ".jsuan .ll" ).html( count ) ;
	$( ".jsuan .lr" ).html( "￥"+money ) ;
}
//加减功能
$( ".number .numb" ).click( function( ){
	var id = $( this ).parent( ).parent( ).data( "id" ) ;
	var sign = $( this ).data( "num" ) ; //商品操作符 （ 加或减 ）
	var count = $( this ).parent( ).find( ".shop_count" ).html( ) ;
	if( sign == -1 && count == 1 ){
		return ;
	}
	//根据  id 在 brr 中查找要操作的商品
	for( var i = 0 ; i < brr.length ; i++ ){
		if( id == brr[ i ].id ){
			brr[ i ].count += sign ;
			//页面商品数量
			$( this ).parent( ).find( ".shop_count" ).html( brr[ i ].count ) ;
			//页面单个商品的总金额
			$( this ).parent( ).next( ).html( brr[ i ].count*brr[ i ].price ) ;
			//将操作后的商品信息存入cookie
			setCookie( "shoplist" , JSON.stringify( brr ) ) ;
			jiesuan( ) ;
			break ;
		}
	}
})
//删除操作
$( ".del" ).click( function( ){
	//找到对应的商品 id
	var id = $( this ).parent( ).data( "id" ) ;
	if( confirm( "确定要删除吗？" ) ){
		//遍历商品数组 brr
		for( var i = 0 ; i < brr.length ; i++ ){
			if( id == brr[ i ].id ){
				//删除数组中 下标为 i 的商品信息
				brr.splice( i , 1 ) ;
				//页面删除对应信息
				$( this ).parent( ).remove( ) ;
				//将删除后的商品信息  重新存入cookie
				setCookie( "shoplist" , JSON.stringify( brr ) ) ;
				break ;
			}
		}
	}
	if( brr.length == 0 ){
		$( ".stuff" ).css( "display" , "block " ) ;
		$( ".shop_box" ).css( "display" , "none" ) ;
	}
})
