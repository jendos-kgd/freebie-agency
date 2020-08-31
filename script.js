'use strict';

$(document).ready(
  function () {
    $('#first_bg').click(
      function () {
        $('header').css('background-image',  'url("img/first_bg.jpg")');
        $('#second_bg').removeClass('active');
        $('#third_bg').removeClass('active');
        $('#first_bg').addClass('active');
      }
    );

    $('#second_bg').click(
      function () {
        $('header').css('background-image',  'url("img/second_bg.jpg")');
        $('#first_bg').removeClass('active');
        $('#third_bg').removeClass('active');
        $('#second_bg').addClass('active');
      }
    );

    $('#third_bg').click(
      function () {
        $('header').css('background-image',  'url("img/third_bg.jpg")');
        $('#first_bg').removeClass('active');
        $('#second_bg').removeClass('active');
        $('#third_bg').addClass('active');
      }
    );
  }
)
