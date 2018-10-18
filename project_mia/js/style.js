

var $list = $( ".classify ul li" ) ;
$list.each( function( index , value ){
	$( value ).hover( function( ){
		$( this ).css( "background-color" , "#ec0971" ) ;
	} , function( ){
		$( this ).css( "background-color" , "#ff3893" ) ;
	})	
})


$("#banner").scrollBanner({
	images : [
		{src:"img/slide/big1.jpg",title:"",href:"#"},
		{src:"img/slide/big2.jpg",title:"",href:"#"},
		{src:"img/slide/big3.jpg",title:"",href:"#"},
		{src:"img/slide/big4.jpg",title:"",href:"#"}
	],
	scrollTime:3000,
	bannerHeight:"480px",
	iconColor: "#FFFFFF",
	iconHoverColor : "#fa4b9b",
	iconPosition : "right"
});

$( ".bar_left dl" ).each( function( index , value ){
	$( value ).mouseenter( function(  ){		
		$( this ).find( ".bar_right" ).show( ) ;
	})
	$( value ).mouseleave( function(  ){		
		$( this ).find( ".bar_right" ).hide( ) ;
	})
})
//scroll事件
$( window ).scroll( function( ){
	var sTop = document.documentElement.scrollTop || document.body.scrollTop ;
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
//引入商品图片
$.getJSON( "images.json" , function( json ){
	var arr = json.shop ;
		var conStr = "" ;
		for( var i = 0 , len = arr.length ; i < len ; i++ ){
			var pro = arr [ i ] ;
			if( i < arr.length ){
				conStr += `<li>
									<a href="page${i+1}.html">
										<img src="${pro.src}" alt="" />
										<p class="cname">${pro.name}</p>
										<p class="cprice"><i>拼团价:</i>${pro.price}<button>去拼团</button></p>										
									</a>
								</li>	`;
			}
		}
		$( ".shoplist" ).html( conStr ) ;
})

$( ".shop_car" ).click( function( ){
	location.href = "shopcar.html" ;
})
var crr = getCookie( "shoplist" ) ;
var sum = null ;
for( var i = 0 ; i< crr.length ; i++ ){
	sum += crr[ i ].count ;
}
$( "#shopNum" ).html( sum ) ;