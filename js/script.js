var mainBody = document.getElementsByClassName('container')[0];
mainBody.addEventListener('click', function(){
	slideMenu.classList.remove('open');
});


var menuButton = document.getElementById('menu');
menuButton.addEventListener('click', function(e){
	slideMenu.classList.toggle('open');
	e.stopPropagation();
});


var mobileView = document.getElementById('mobileView');
mobileView.addEventListener('click', function(){
	mainBody.style.width = '350px';
});

var desktopView = document.getElementById('desktopView');
desktopView.addEventListener('click', function(){
	mainBody.style.width = '940px';
});