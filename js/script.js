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

// to display as mobile device display
mobileView_func = function(){
	mainBody.style.width = '350px';
	mainBody.classList.add('container_device');
};

// to display as web app 
desktopView_func = function(){
	mainBody.style.width = '940px';
	mainBody.classList.add('container_device');
};

var mobileView = document.getElementById('mobileView');
mobileView.addEventListener('click', mobileView_func);

var desktopView = document.getElementById('desktopView');
desktopView.addEventListener('click', desktopView_func);

var mobileView1 = document.getElementById('mobileView1');
mobileView1.addEventListener('click', mobileView_func);

var desktopView1 = document.getElementById('desktopView1');
desktopView1.addEventListener('click', desktopView_func);

var webView = document.getElementById('webView');
webView.addEventListener('click', function(){
	location.reload();
});