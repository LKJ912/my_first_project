function $id( id ){
	return document.getElementById( id ) ;
}
$( ".login_right p:eq( 0 )" ).css( { "font-size" : 18 , "color" : "#f450a2" } ) ;
$( ".login_right p:eq( 1 ) a" ).css( { "font-size" : 14 , "color" : "#f450a2" , "margin-left" : 74 , "margin-right" : 10 , "text-decoration" : "none"} ) ; 
$( ".login_right p:eq( 2 )" ).css( { "font-size" : 12 } ) ;
//注册验证
$id( "btn" ).onclick=function( ){
	if( flagName && flagPwd && flagQpwd && flagNum ){
		var useName = $id( "uname" ).value ;
		var usePwd = $id( "upwd" ).value ;
		var arr = [ ] ;
		var flag = true ;
		var json = {
				"uname" : useName ,
				"upwd" : usePwd
			}
		var brr = getCookie( "namelist" ) ;
		if( brr.length != 0 ){
			arr = brr ;
			for( var i = 0 ; i < arr.length ; i++ ){
				if( json.uname == arr[ i ].uname ){
					$id( "p1" ).innerHTML = "该用户名已存在" ;
					$id( "p1" ).className = "pcstyle" ;
					alert( "该用户名已存在" ) ;
					flag = false ;
					return ;
				}
			}
		}
		if( flag ){
			arr.push( json ) ;
		}
		setCookie( "namelist" , JSON.stringify( arr ) ) ;
		alert( "注册成功" )
		location.href = "index.html" ;
	}else{
		confirm( "注册信息还有错误" ) ;
	}
	
}
//用户名验证
var flagName = null ;
$id( "uname" ).onblur=function( ){
	var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ ;
	var strName = $id( "uname" ).value ;
	if( strName == "" ){
		$id( "p1" ).innerHTML = "邮箱不能为空" ;
		$id( "p1" ).className = "pcstyle" ;
		return ;
	}
	if( reg.test( strName ) ){
		$id( "p1" ).innerHTML = "格式正确" ;
		$id( "p1" ).className = "pzstyle" ;
		flagName = true ;
	}else{
		$id( "p1" ).innerHTML = "格式错误" ;
		$id( "p1" ).className = "pcstyle" ;
		flagName = false ;
	}
}
//密码验证
var flagPwd = null ;
$id( "upwd" ).onblur=function( ){
	var reg = /[0-9]{1,}\w{5,}/ ;
	var strPwd = $id( "upwd" ).value ;
	if( strPwd == "" ){
		$id( "p2" ).innerHTML = "密码不能为空" ;
		$id( "p2" ).className = "pcstyle" ;
		return ;
	}
	if( reg.test( strPwd ) ){
		$id( "p2" ).innerHTML = "格式正确" ;
		$id( "p2" ).className = "pzstyle" ;
		flagPwd = true ;
	}else{
		$id( "p2" ).innerHTML = "格式错误" ;
		$id( "p2" ).className = "pcstyle" ;
		flagPwd = false ;
	}
}
//确认密码
var flagQpwd = null ;
$id( "qpwd" ).onblur=function( ){
	var strQpwd = $id( "qpwd" ).value ;
	var strpwd = $id( "upwd" ).value ;
	if( strQpwd == "" ){
		$id( "p3" ).innerHTML = "确认密码不能为空" ;
		$id( "p3" ).className = "pcstyle" ;
		return ;
	}
	if( strQpwd === strpwd ){
		$id( "p3" ).innerHTML = "格式正确" ;
		$id( "p3" ).className = "pzstyle" ;
		flagQpwd = true ;
	}else{
		$id( "p3" ).innerHTML = "格式错误" ;
		$id( "p3" ).className = "pcstyle" ;
		flagQpwd = false ;
	}
}
//手机验证
var flagNum = null ;
$id( "unum" ).onblur=function( ){
	var reg = /^1[3-8][0-9]{9}$/ ;
	var strNum = $id( "unum" ).value ;
	if( strNum == "" ){
		$id( "p4" ).innerHTML = "手机号码不能为空" ;
		$id( "p4" ).className = "pcstyle" ;
		return ;
	}
	if( reg.test( strNum ) ){
		$id( "p4" ).innerHTML = "格式正确" ;
		$id( "p4" ).className = "pzstyle" ;
		flagNum = true ;
	}else{
		$id( "p4" ).innerHTML = "格式错误" ;
		$id( "p4" ).className = "pcstyle" ;
		flagNum = false ;
	}
}


