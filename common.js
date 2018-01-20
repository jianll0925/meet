var _hmt = _hmt || [];
var baseSize = 12;
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?7c5e9a118b8ba279f526f4308baa0712";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
})();
(function(){
	var html = document.documentElement;
	var htmlWidth = html.getBoundingClientRect().width;
	html.style.fontSize = htmlWidth/15 +"px";
	baseSize = htmlWidth/15;
})();