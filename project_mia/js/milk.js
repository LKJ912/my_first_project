var $list = $( ".classify ul li" ) ;
$list.each( function( index , value ){
	$( value ).hover( function( ){
		$( this ).css( "background-color" , "#ec0971" ) ;
	} , function( ){
		$( this ).css( "background-color" , "#ff3893" ) ;
	})	
})
$( ".nav_bar" ).hover( function( ){
	$( ".nav_bar" ).find( ".bar_left" ).show( ) ;
} , function( ){
	$( ".nav_bar" ).find( ".bar_left" ).hide( ) ;
})
$( ".bar_left dl" ).each( function( index , value ){
	$( value ).mouseenter( function(  ){		
		$( this ).find( ".bar_right" ).show( ) ;
	})
	$( value ).mouseleave( function(  ){		
		$( this ).find( ".bar_right" ).hide( ) ;
	})
})
$( ".shop_car" ).click( function( ){
	location.href = "shopcar.html" ;
})
//scroll事件
$( window ).scroll( function( ){
	var sTop = $( "body,html" ).scrollTop( ) ;
	if( sTop > 100 ){
		$( ".scroll_right" ).css( "display" , "block" ) ;
	}else{
		$( ".scroll_right" ).css( "display" , "none" ) ;		
	}
	if( sTop > 500 ){
		$( "#stairs" ).show( ) ;
	}else{
		$( "#stairs" ).hide( ) ;
	}
})
$( ".scroll_right .f" ).click( function( ){
	$( "body,html").animate( { scrollTop : 0 } , 1000 ) ;
})
//引入商品图片

$.getJSON( "images.json" , function( json ){
	var drr = json.deguo ;
	var donStr = "" ;
	for( var i = 0 ; i < drr.length ; i++ ){
		var pro = drr[ i ] ;
		donStr += `<li>
								<img src="${pro.src}" alt="" />
								<p class="cname">${pro.name}</p>
								<p class="cprice">${pro.price}<button>查看详情</button></p>
							</li>` ;
	}
	$( "#deguo" ).html( donStr ) ;
	//$( "#deguo" ).css( "height" , 2579 ) ;	
	var index = drr.length ;
	var consult = parseInt( index/4  ) ;
	if( index%4 != 0 ){
		$( "#deguo" ).css( "height" , 368+consult*368 ) ;		
	}else if( index%4 == 0 ){
		$( "#deguo" ).css( "height" , consult*368 ) ;	
	}
	//console.log( $( "#deguo" ).height( ) ) ;
})
$.getJSON( "images.json" , function( json ){
	var hrr = json.helan ;
	var honStr = "" ;
	for( var i = 0 ; i < hrr.length ; i++ ){
		var pro = hrr[ i ] ;
		honStr += `<li>
								<img src="${pro.src}" alt="" />
								<p class="cname">${pro.name}</p>
								<p class="cprice">${pro.price}<button>查看详情</button></p>
							</li>` ;
	}
	$( "#helan" ).html( honStr ) ;
	var index = hrr.length ;
	var consult = parseInt( index/4  ) ;
	if( index%4 != 0 ){
		$( "#helan" ).css( "height" , 368+consult*368 ) ;		
	}else if( index%4 == 0 ){
		$( "#helan" ).css( "height" , consult*368 ) ;	
	}
	//console.log( $( "#helan" ).height( ) ) ;
})
$.getJSON( "images.json" , function( json ){
	var arr = json.aierlan ;
	var aonStr = "" ;
	for( var i = 0 ; i < arr.length ; i++ ){
		var pro = arr[ i ] ;
		aonStr += `<li>
								<img src="${pro.src}" alt="" />
								<p class="cname">${pro.name}</p>
								<p class="cprice">${pro.price}<button>查看详情</button></p>
							</li>` ;
	}
	$( "#aierlan" ).html( aonStr ) ;
	var index = arr.length ;
	var consult = parseInt( index/4  ) ;
	if( index%4 != 0 ){
		$( "#aierlan" ).css( "height" , 368+consult*368 ) ;		
	}else if( index%4 == 0 ){
		$( "#aierlan" ).css( "height" , consult*368 ) ;	
	}
	//console.log( $( "#aierlan" ).height( ) ) ;
})
$.getJSON( "images.json" , function( json ){
	var yrr = json.yingguo ;
	var yonStr = "" ;
	for( var i = 0 ; i < yrr.length ; i++ ){
		var pro = yrr[ i ] ;
		yonStr += `<li>
								<img src="${pro.src}" alt="" />
								<p class="cname">${pro.name}</p>
								<p class="cprice">${pro.price}<button>查看详情</button></p>
							</li>` ;
	}
	$( "#yingguo" ).html( yonStr ) ;
	var index = yrr.length ;
	var consult = parseInt( index/4  ) ;
	if( index%4 != 0 ){
		$( "#yingguo" ).css( "height" , 368+consult*368 ) ;		
	}else if( index%4 == 0 ){
		$( "#yingguo" ).css( "height" , consult*368 ) ;	
	}
	//console.log( $( "#yingguo" ).height( ) ) ;
})
$.getJSON( "images.json" , function( json ){
	var mrr = json.deguomm ;
	var monStr = "" ;
	for( var i = 0 ; i < mrr.length ; i++ ){
		var pro = mrr[ i ] ;
		monStr += `<li>
								<img src="${pro.src}" alt="" />
								<p class="cname">${pro.name}</p>
								<p class="cprice">${pro.price}<button>查看详情</button></p>
							</li>` ;
	}
	$( "#deguomm" ).html( monStr ) ;
	var index = mrr.length ;
	var consult = parseInt( index/4  ) ;
	if( index%4 != 0 ){
		$( "#deguomm" ).css( "height" , 368+consult*368 ) ;		
	}else if( index%4 == 0 ){
		$( "#deguomm" ).css( "height" , consult*368 ) ;	
	}
	//console.log( $( "#deguomm" ).height( ) ) ;
})
//楼梯
var flag = true ; //为 true时 触发滚动条事件
$( "#stairs li" ).click( function( ){
	flag = false ;
	$( this ).addClass( "active" ).siblings( ).removeClass( "active" )  ;
	var index = $( this ).index( ) ;
	var t = $( ".details ul" ).eq( index ).offset( ).top ;
	//console.log( t ) ;
	$( "body,html" ).animate( { scrollTop : t - 50 } , 1000 ,function( ){
		flag = true ;
	}) ;
})


