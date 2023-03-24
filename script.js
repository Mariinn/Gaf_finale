	var regopener = document.querySelector('#regopener');
	var regchooseback = document.querySelector('#regchooseback');
	var login = document.querySelector('#login');
	var parent = document.querySelector('#parent');
	var teacher = document.querySelector('#teacher');
	var toregchoose1 = document.querySelector('#toregchoose1');
	var toregchoose2 = document.querySelector('#toregchoose2');
	var loginbtn = document.querySelector('#loginbtn');
	var registert = document.querySelector('#registert');
	var registerp = document.querySelector('#registerp');

	var menubtnopen = document.querySelector('#menubtnopen');
	var menubtnclosed = document.querySelector('#menubtnclosed');

	var menubtnmain= document.querySelector('#menubtnmain');
	var menubtnnavigation = document.querySelector('#menubtnnavigation');
	var menubtnevents = document.querySelector('#menubtnevents');
	var menubtntimetable = document.querySelector('#menubtntimetable');
	var menubtneatery = document.querySelector('#menubtneatery');
	var menubtncardp = document.querySelector('#menubtncardp');
	var menubtncardu = document.querySelector('#menubtncardu');
	var menubtnfond = document.querySelector('#menubtnfond');
	var menubtnratingt = document.querySelector('#menubtnratingt');
	var menubtnratingp = document.querySelector('#menubtnratingp');
	var menubtnratingu = document.querySelector('#menubtnratingu');

	let logindiv = document.querySelector('.logindiv');
	let regchoose = document.querySelector('.regchoose');
	let registerdivteacher = document.querySelector('.registerdivteacher');
	let registerdivparent = document.querySelector('.registerdivparent');

	let header = document.querySelector('.header');
	let menu = document.querySelector('.menu');
	let main = document.querySelector('.main');
	let navigation = document.querySelector('.navigation');
	let events = document.querySelector('.events');
	let timetable = document.querySelector('.timetable');
	let eatery = document.querySelector('.eatery');
	let cardp = document.querySelector('.cardp');
	let cardu = document.querySelector('.cardu');
	let fond = document.querySelector('.fond');
	let ratingt = document.querySelector('.ratingt');
	let ratingp = document.querySelector('.ratingp');
	let ratingu = document.querySelector('.ratingu');
	let mt1 = document.querySelector('.mt1');
	let mt2 = document.querySelector('.mt2');
	let mu1 = document.querySelector('.mu1');
	let mu2 = document.querySelector('.mu2');
	let mp1 = document.querySelector('.mp1');
	let mp2 = document.querySelector('.mp2');


	var openpoints = document.querySelector('#openpoints');
	var openrating = document.querySelector('#openrating');


	function openratingfort() {
        	ratingp.style.display = 'block';
        	ratingt.style.display = 'none';
    }
	openrating.addEventListener('click', openratingfort);
	
	function openmain1() {
        	main.style.display = 'block';
        	header.style.display = 'block';
        	logindiv.style.display = 'none'
        	mu1.style.display = 'block';
        	mu2.style.display = 'block';
    }
	function openmain2() {
        	main.style.display = 'block';
        	header.style.display = 'block';
        	registerdivteacher.style.display = 'none'
        	mt1.style.display = 'block';
        	mt2.style.display = 'block';
    }
	function openmain3() {
        	main.style.display = 'block';
        	header.style.display = 'block';
        	registerdivparent.style.display = 'none'
        	mp1.style.display = 'block';
        	mp2.style.display = 'block';
    }

	function openregchoose() {
        	regchoose.style.display = 'block';
        	logindiv.style.display = 'none'
    }
	function closeregchoose() {
        	regchoose.style.display = 'none';
        	logindiv.style.display = 'block'
    }
	function openregteacher() {
        	regchoose.style.display = 'none';
        	registerdivteacher.style.display = 'block'
    }
	function openregparent() {
        	regchoose.style.display = 'none';
        	registerdivparent.style.display = 'block'
    }
	function backtoregchoose1() {
        	regchoose.style.display = 'block';
        	registerdivteacher.style.display = 'none'
    }
	function backtoregchoose2() {
        	regchoose.style.display = 'block';
        	registerdivparent.style.display = 'none'
    }
	regopener.addEventListener('click', openregchoose);
	regchooseback.addEventListener('click', closeregchoose);
	teacher.addEventListener('click', openregteacher);
	parent.addEventListener('click', openregparent);
	toregchoose1.addEventListener('click', backtoregchoose1);
	toregchoose2.addEventListener('click', backtoregchoose2);

	loginbtn.addEventListener('click', openmain1);
	registert.addEventListener('click', openmain2);
	registerp.addEventListener('click', openmain3);




	function openmenu() {
        	menu.style.display = 'block';
        	menubtnclosed.style.display = 'block';
        	menubtnopen.style.display = 'none'
    }
	function closemenu() {
        	menu.style.display = 'none';
        	menubtnclosed.style.display = 'none';
        	menubtnopen.style.display = 'block'
    }
	menubtnclosed.addEventListener('click', closemenu);
	menubtnopen.addEventListener('click', openmenu);

	function menumain() {
        	menu.style.display = 'none';
        	navigation.style.display = 'none';
        	eatery.style.display = 'none';
        	timetable.style.display = 'none';
        	cardp.style.display = 'none';
        	cardu.style.display = 'none';
        	fond.style.display = 'none';
        	ratingt.style.display = 'none';
        	ratingp.style.display = 'none';
        	ratingu.style.display = 'none';
        	main.style.display = 'block';
    }
	function menunavigation() {
        	menu.style.display = 'none';
        	main.style.display = 'none';
        	eatery.style.display = 'none';
        	timetable.style.display = 'none';
        	cardp.style.display = 'none';
        	cardu.style.display = 'none';
        	fond.style.display = 'none';
        	ratingt.style.display = 'none';
        	ratingp.style.display = 'none';
        	ratingu.style.display = 'none';
        	navigation.style.display = 'block';
    }
	function menutimetabe() {
        	menu.style.display = 'none';
        	main.style.display = 'none';
        	navigation.style.display = 'none';
        	eatery.style.display = 'none';
        	cardp.style.display = 'none';
        	cardu.style.display = 'none';
        	fond.style.display = 'none';
        	ratingt.style.display = 'none';
        	ratingp.style.display = 'none';
        	ratingu.style.display = 'none';
        	timetable.style.display = 'block';
    }
	function menueatery() {
        	menu.style.display = 'none';
        	main.style.display = 'none';
        	navigation.style.display = 'none';
        	timetable.style.display = 'none';
        	cardp.style.display = 'none';
        	cardu.style.display = 'none';
        	fond.style.display = 'none';
        	ratingt.style.display = 'none';
        	ratingp.style.display = 'none';
        	ratingu.style.display = 'none';
        	eatery.style.display = 'block';
    }
	function menucardp() {
        	menu.style.display = 'none';
        	main.style.display = 'none';
        	navigation.style.display = 'none';
        	timetable.style.display = 'none';
        	eatery.style.display = 'none';
        	cardu.style.display = 'none';
        	fond.style.display = 'none';
        	ratingt.style.display = 'none';
        	ratingp.style.display = 'none';
        	ratingu.style.display = 'none';
        	cardp.style.display = 'block';
    }
	function menucardu() {
        	menu.style.display = 'none';
        	main.style.display = 'none';
        	navigation.style.display = 'none';
        	timetable.style.display = 'none';
        	eatery.style.display = 'none';
        	cardp.style.display = 'none';
        	fond.style.display = 'none';
        	ratingt.style.display = 'none';
        	ratingp.style.display = 'none';
        	ratingu.style.display = 'none';
        	cardu.style.display = 'block';
    }
	function menufond() {
        	menu.style.display = 'none';
        	main.style.display = 'none';
        	navigation.style.display = 'none';
        	timetable.style.display = 'none';
        	eatery.style.display = 'none';
        	cardp.style.display = 'none';
        	cardu.style.display = 'none';
        	ratingt.style.display = 'none';
        	ratingp.style.display = 'none';
        	ratingu.style.display = 'none';
        	fond.style.display = 'block';
    }
	function menuratingt() {
        	menu.style.display = 'none';
        	main.style.display = 'none';
        	navigation.style.display = 'none';
        	timetable.style.display = 'none';
        	eatery.style.display = 'none';
        	cardp.style.display = 'none';
        	cardu.style.display = 'none';
        	fond.style.display = 'none';
        	ratingp.style.display = 'none';
        	ratingu.style.display = 'none';
        	ratingt.style.display = 'block';
    }
	function menuratingp() {
        	menu.style.display = 'none';
        	main.style.display = 'none';
        	navigation.style.display = 'none';
        	timetable.style.display = 'none';
        	eatery.style.display = 'none';
        	cardp.style.display = 'none';
        	fond.style.display = 'none';
        	ratingt.style.display = 'none';
        	ratingp.style.display = 'block';
        	ratingu.style.display = 'none';
        	cardu.style.display = 'none';
    }
	function menuratingu() {
        	menu.style.display = 'none';
        	main.style.display = 'none';
        	navigation.style.display = 'none';
        	timetable.style.display = 'none';
        	eatery.style.display = 'none';
        	cardp.style.display = 'none';
        	cardu.style.display = 'none';
        	fond.style.display = 'none';
        	ratingt.style.display = 'none';
        	ratingp.style.display = 'none';
        	ratingu.style.display = 'block';
    }
	menubtnmain.addEventListener('click', menumain);
	menubtnnavigation.addEventListener('click', menunavigation);
	menubtntimetable.addEventListener('click', menutimetabe);
	menubtneatery.addEventListener('click', menueatery);
	menubtncardp.addEventListener('click', menucardp);
	menubtncardu.addEventListener('click', menucardu);
	menubtnfond.addEventListener('click', menufond);

	menubtnratingt.addEventListener('click', menuratingt);
	menubtnratingp.addEventListener('click', menuratingp);
	menubtnratingu.addEventListener('click', menuratingu);