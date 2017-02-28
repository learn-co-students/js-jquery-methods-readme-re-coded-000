'use strict';

function fancySchmancy() {
	$('p').addClass('iAmFancy #bacon')
	return $('p')
}

function addText(str) {
	return $("p:nth-child(2)").append('str')
}

function showDolphin() {
	$('img').show();
}

function hideImage() {
	$("img[alt='pie in face']").hide();
}

function fadeIt() {
	$('#favorite-snacks').fadeIn()
}

function fadeItOut() {
	$("p:nth-child(2)").fadeOut(0)
}

function findItByClass(str){
	return $(str).hasClass("flatironLink");
}

function formValue() {
	return $('input:last').val();
}