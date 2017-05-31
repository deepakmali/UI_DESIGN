// click event handler to open the menu 
var mainBody = document.getElementsByClassName('container')[0];
mainBody.addEventListener('click', function(){
	slideMenu.classList.remove('open');
});

// click event handler to close the menu
var menuButton = document.getElementById('menu');
menuButton.addEventListener('click', function(e){
	slideMenu.classList.toggle('open');
	// to stop the event propagation so that the above function do not run after this function
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