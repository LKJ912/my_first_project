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

//鼠标移入移出底部小图  
$( "#img_bottom li" ).mouseenter( function( ){
	//console.log( $( this )  ) ;
	var index = $( this ).index( ) ;
	//console.log( index )
	$( "#img_top img" ).eq( index ).show( ).siblings( "img" ).hide( ) ;
	$( ".bigimg img" ).eq( index ).show( ).siblings( ).hide( ) ;
})
//鼠标移入移出的显示隐藏
$( ".mask" ).on({
	"mouseenter" : function( ){
		$( ".move" ).show( ) ;
		$( ".bigimg" ).show( ) ;
	},
	"mouseleave" : function( ){
		$( ".move" ).hide( ) ;
		$( ".bigimg" ).hide( ) ;
	},
	"mousemove" : function( evt ){
		var e = evt || window.event ;
		var dix = e.clientX - $( "#img_top" ).offset( ).left - $( "#move" ).width( )/2 ;
		var diy = e.clientY - $( ".cen_left" ).offset( ).top - $( "#move" ).height( )/2  + $( window ).scrollTop();

		var maxL = $( "#mask" ).width( ) - $( "#move" ).width( ) ;
		var maxT = $( "#mask" ).height( ) - $( "#move" ).height( ) ;;
		dix = dix < 0 ? 0 : ( dix > maxL ? maxL : dix ) ;
		diy = diy < 0 ? 0 : ( diy > maxT ? maxT : diy ) ;
		var rightImgX = -dix * $( ".boximg" ).width( ) / $( ".img_top" ).width( ) ;
		var rightImgY = -diy * $( ".boximg" ).height( ) / $( ".img_top" ).height( ) ;
		$( "#move" ).css( { "left" : dix + "px" , "top" : diy + "px" } ) ;
		$( ".boximg" ).css( { "left" : rightImgX + "px" , "top" : rightImgY + "px" } ) ;
	}
})

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

//购物车数量
var crr = getCookie( "shoplist" ) ;
var sum = null ;
for( var i = 0 ; i< crr.length ; i++ ){
	sum += crr[ i ].count ;
}
$( "#shopNum" ).html( sum ) ;
//添加购物车功能
$( ".addcar" ).click( function( ){
	var moveImg = $( this ).prev( ).find( "img" ) ;
	var startObj = $( this ) ;
	var endObj = $( ".endobj" ) ;
	$.fnInt( startObj , endObj ).fnMove( moveImg ) ;
	var arr = [ ] ;//存放多个商品对象
	var flag = true ;//假设 值为true是，执行push
	//存放当前商品的信息
	var json = {
		id : $( this ).data( "id" ) ,
		src : $( this ).data( "src" ) ,
		name : $( this ).data( "name" ) ,
		price : $( this ).data( "price" ) ,
		count : 1 
	}
	
	//点击时取出cookie
	//将取出 的数组 存入 arr
	var brr = getCookie( "shoplist" ) ;
	if( brr.length != 0 ){
		arr = brr ;
		//判断当前商品在数组中是否已经存在
		for( var i = 0 ; i < arr.length ; i++ ){
			if( json.id == arr[ i ].id ){
				arr[ i ].count++ ;
				flag = false ;
			}
		}
	}
	if( flag ){
		arr.push( json ) ;
	}
	setCookie( "shoplist" , JSON.stringify( arr ) ) ;
})
//抛物线
$.extend({
	fnInt : function( startObj , endObj ){
		//起始点坐标
		this.startPoint = {
			"x" : startObj.offset( ).left + startObj.width( )/2,
			"y" : startObj.offset( ).top
		}
		//结束点坐标
		this.endPoint = {
			"x" : endObj.offset( ).left + endObj.width( )/2,
			"y" : endObj.offset( ).top
		}
		//最高点坐标
		this.topPoint = {
			"x" : this.endPoint.x - 100 ,
			"y" : this.endPoint.y - 100 
		}
		//抛物线系数
		this.a = ((this.startPoint.y - this.endPoint.y) * (this.startPoint.x - this.topPoint.x) - (this.startPoint.y - this.topPoint.y) * (this.startPoint.x - this.endPoint.x)) / ((this.startPoint.x * this.startPoint.x - this.endPoint.x * this.endPoint.x) * (this.startPoint.x - this.topPoint.x)-(this.startPoint.x * this.startPoint.x - this.topPoint.x * this.topPoint.x) * (this.startPoint.x - this.endPoint.x));  
					
		this.b = ((this.endPoint.y - this.startPoint.y) - this.a * (this.endPoint.x * this.endPoint.x - this.startPoint.x * this.startPoint.x)) / (this.endPoint.x - this.startPoint.x);  
					
		this.c = this.startPoint.y - this.a * this.startPoint.x * this.startPoint.x - this.b * this.startPoint.x;
		return this ;
	},
	fnMove : function( moveImg ){//运动方程
		//起始点坐标
		var x = this.startPoint.x ;
		var y = this.startPoint.y ;
		//创建运动对象
		var move = $( "<img>" ) ;
		move.attr( "src" , moveImg.attr( "src" ) ) ;
		move.css( { "width" : 20 , "height" : 20 , "position" : "absolute" , "left" : x , "top" : y } ) ;
		$( "body" ).append( move ) ;
		var timer = setInterval( function( ){
			x += 10 ;
			y = this.a*x*x+this.b*x+this.c ;
			if( x < this.endPoint.x ){
				move.css( { left : x , top : y } ) ;
			}else{
				move.css( "top" , this.endPoint.y ) ;
				clearInterval( timer ) ;
				move.remove( ) ;
				$( "#shopNum" ).html( Number( $( "#shopNum" ).html( ) ) + 1 ) ;
			}
		}.bind( this ) , 30 )
	}
})
