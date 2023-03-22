let menubtn = document.querySelector('.menubtn')
let menu = document.querySelector('.menu')
let menuholder = document.querySelector('.menuholder')
let menuotherhalf = document.querySelector('.menuotherhalf')
menubtn.onclick = function(){
	menuholder.style.display = 'block';
	menu.style.display = 'block';
	menuotherhalf.style.display = 'block';
	alert('a')
menuotherhalf.onclick = function() {
	menuholder.style.display = 'none';
	alert()
}