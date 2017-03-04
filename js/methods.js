'use strict';

function fancySchmancy() {
 var add =  $('#bacon').addClass('iAmFancy')
  return add;
}

function addText(str) {
var string = $('p:last').append(str)
return string;
}

function showDolphin() {
 $("img[id='hidden']").show();
}

function hideImage() {
  $("img[alt='pie in face']").hide();
}
 function fadeIt() {
  $('div #favorite-snacks').fadeIn();
 }

function fadeItOut() {
  $('p:last').fadeOut(0);
}

function findItByClas(selector) {
  var find = $(selector).hasClass('flatironLink');
  return find;
}

function formValue() {
  var val = $('input:last').val()
  return val;
}
