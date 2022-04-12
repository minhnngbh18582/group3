$('a[href^="#"]').on('click', function(event) {  
	var $target = $(this.getAttribute('href'));  
	if($target.length) {
	  event.preventDefault();
	  $('html, body').stop().animate({
		scrollTop: $target.offset().top
	  }, 750, 'easeInOutQuad');
	}
});   
document.getElementById("navbar-item").onclick = function () {
	document.getElementById("navbar-item-detail").style.display = 'block';
	document.getElementById("navbar-item-cancel").style.display = 'block';
	document.getElementById("navbar-item").style.display = 'none';
};
document.getElementById("navbar-item-cancel").onclick = function () {
	document.getElementById("navbar-item-detail").style.display = 'none';
	document.getElementById("navbar-item-cancel").style.display = 'none';
	document.getElementById("navbar-item").style.display = 'block';
};   
