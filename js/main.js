var $body = $('body');

$('html').on('keydown', function () {
  var $ball = $('<div>');
  var newLeft = Math.random() * 4000;
  var newTop = Math.random() * 1000;
