'use strict';
function fancySchmancy() {
  $('p#bacon').addClass("iAmFancy");
  return $('.iAmFancy');
}
function addText(str) {
  return $('p:first-child + p').append(str);
}
function showDolphin() {
  $('img#hidden').show()
}
function hideImage() {
  $('img[alt="pie in face"]').hide()
}
function fadeIt() {
  $('div#favoorite-snacks').fadeIn();
}
function fadeItOut() {
  $('p:first-child + p').fadeOut(0);
}
function findItByClass(selector) {
  return $(selector).hasClass("flatironLink");
}
function formValue() {
  return $('input:last').val();
}
