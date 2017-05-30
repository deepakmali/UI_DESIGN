var mainBody = document.getElementsByClassName('container')[0];
mainBody.addEventListener('click', function(){
	slideMenu.classList.remove('open');
});
var menuButton = document.getElementById('menu');
menuButton.addEventListener('click', function(e){
	slideMenu.classList.toggle('open');
	e.stopPropagation();
});

