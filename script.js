let menubtn = document.querySelector('.menubtn')
let menu = document.querySelector('.menu')
let menuholder = document.querySelector('.menuholder')
let menuotherhalf = document.querySelector('.menuotherhalf')
let regopener = document.querySelector('#regopener')
let registerdivteacher = document.querySelector('.registerdivteacher')
let logindiv = document.querySelector('.logindiv')
let login = document.querySelector('.login')
// menubtn.onclick = function(){
// 		menuotherhalf.style.display = 'block';
// 		menuholder.style.display = 'block';
// 		menu.style.display = 'block';
// }
// menuotherhalf.onclick = function() {
// 	menuholder.style.display = 'none';
// 	alert()
// }
function gotoregchoose(){
	registerdivchoose.style.display = 'block';
	logindiv.style.display = 'none';
	alert()
}
function gotoregpar(){
	registerdivteacher.style.display = 'block';
	logindiv.style.display = 'none';
	alert()
}
function gotoregpteach(){
	registerdivteacher.style.display = 'block';
	logindiv.style.display = 'none';
	alert()
}
function gotomain(){
	main.style.display = 'block';
	logindiv.style.display = 'none';
	alert()
}
regopener.addEventListener('click', gotoregchoose);
regopenert.addEventListener('click', gotoregpar);
regopenerp.addEventListener('click', gotoregpteach);
registerbtn.addEventListener('click', gotomain);