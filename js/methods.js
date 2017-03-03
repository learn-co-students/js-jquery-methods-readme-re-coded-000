'use strict';
function fancySchmancy(){
	$("#bacon").addClass("iAmFancy");
	return $("#bacon");
}
function addText(string){
	$('p:last').append(string);
	return $('p:last');
}
function showDolphin(){
	return $('#hidden').show();
}
function hideImage(){
	return $("img[alt='pie in face']").hide();
}
function fadeIt(){
	return $('#favorite-snacks').fadeIn();
}
function fadeItOut(){
	return $('p:last').fadeOut(0);
}
function findItByClass(string){
	return $(string).hasClass("flatironLink");
}
function formValue(){
	return $('input:last').val();
}