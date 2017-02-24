'use strict';
function fancySchmancy(){
	$('#bacon').addClass('iAmFancy');
	return $('.iAmFancy');
}
function addText(){
	$('p:first-child + p')
  return $('p:first-child + p');
}
function showDolphin(){
	$('#hidden').show();
}
function hideImage(){
	$('img[alt="pie in face"]').hide();
}
function fadeIt(){
  $("#favorite-snacks").fadeIn();
}
function fadeItOut(){
  $('p:first-child + p').fadeOut(0);
  return $('p:first-child + p');
}

function findItByClass(selector){
  return $(selector).hasClass("flatironLink");
}

function animateIt(){
  $('#box').animate({height: "500px"});
}


function formValue(){
  return $('input:last').val();
  }