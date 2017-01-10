'use strict';
function fancySchmancy() {
  return $('#bacon').addClass('iAmFancy');
}
function addText(text) {
  return  $('p:last').val(text)
}
function showDolphin() {
   $('#hidden').show()
}
function hideImage() {
   $('img[alt="pie in face"]').hide(0)
}
function fadeIt() {
   $('#favorite-snacks').fadeIn()
}
function fadeItOut() {
   $('p:last').fadeOut(0)
}

function findItByClass(tag) {
  return  $(tag).hasClass("flatironLink")
}
function formValue() {
  return  $('form input:last-child').val()
}
