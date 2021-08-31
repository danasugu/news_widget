'use strict';
$.ajax({
  url: 'http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8',
  dataType: 'json',
  type: 'GET',
  cache: false,
  data: {
    page: 1,
    pagelimit: 5,
  },
  success: function (data) {
    $(data.news).each(function (index, value) {
      $('ul').append('<li class="title">' + value.title + '</li>');
      $('ul').append('<li class="details">' + value.details + '</li>');
    });
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
  },
});
