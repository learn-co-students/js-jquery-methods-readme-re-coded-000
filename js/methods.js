'use strict';

function fancySchmancy() {
$('p#bacon').addClass('iAmFancy')
return $('p.iAmFancy')
}

function addText(string) {
  $('p:last-child + p').append(string)
  return $('p:first-child + p')
}

function showDolphin() {
  $('img#hidden').show()
}


function hideImage() {
  $('img[alt="pie in face"]').hide()
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn()
}

function fadeItOut() {
  $('p:last-child + p').fadeOut(0)
  return $('p:first-child + p');
}

function findItByClass(string) {
  return $(string).hasClass('a.flatironLink')
}

function formValue() {
  return $('input:last').val()
}

function animateIt(){
  $('#box').animate({height: "500px"});
}
