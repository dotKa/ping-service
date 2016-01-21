var Ping=function(){this._version="0.0.1"};Ping.prototype.ping=function(a,b){function c(){var a=new Date-d;"function"==typeof b&&b(a)}this.img=new Image;var d=new Date;this.img.onload=this.img.onerror=c,this.img.src="//"+a+"/?"+ +new Date};

//Yukarı daki kod https://github.com/alfg/ping.js/tree/master üzerinden alınmıştır.


var goping = new Ping();
//Ping Api'si kullanıyorum.

var adres = window.location.href;
//Bulunduğum sayfayı alıyorum.

var git = 'http://blogsearch.google.com.tr/ping?url='+adres+'&btnG=Blog+g%C3%B6nder&hl=tr';
//Şuanlık sadece 1 adres ping servisi için manipule ediyorum.

goping.ping(git, function(data) {
    document.getElementById("ping-you").innerHTML = data;
});
//Verimin geri dönüş süresini takip ediyorum.

function location_html () {
	document.getElementById("veri").innerHTML = adres;
}
//Şuanki siteyi ekrana bastırıyorum.

alert(git);
//ping süresini ölçüyor hemde ping adresini kontrol ediyorumç

