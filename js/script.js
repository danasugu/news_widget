'use strict';
$.ajax({
  url: 'http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8',
  dataType: 'json',
  type: 'GET',
  cache: false,
  pagelimit: 10,
  success: function (data) {
    $(data.news).each(function (index, value) {
      $('ul').append('<li class="title">' + value.title + '</li>');
      $('ul').append('<li class="details">' + value.details + '</li>');
    });
  },
});

var numberOfItems = $('#loop .group').length;
// var limitPerPage = 5;
// $("#loop .")
// alert(numberOfItems);

// const dots = document.querySelector('.dots');
// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

// let arrayList = [];

// const list_element = document.getElementById('dots');
// const pagination_element = document.getElementById('first');

// let current_page = 1;
// let rows = 10;

// function DisplayList(items, wrapper, rows_per_page, page) {
//   wrapper.innnerHTML = '';
//   page++;

//   let loop_start = rows_per_page * page;
//   let paginatedItems = items.slice(loop_start, loop_start + rows_per_page);
//   console.log(paginatedItems);
//   for (let i = loop_start; i < loop_start + rows_per_page; i++) {}
// }
// DisplayList(list_element, rows, current_page);
