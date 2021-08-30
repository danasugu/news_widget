function fetchData() {
  fetch('http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.news);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();

// 'use strict';
// $.ajax({
//   url: 'http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8',
//   dataType: 'json',
//   type: 'GET',
//   cache: false,
//   data: {
//     minRow: 1,
//     maxRow: 5,
//   },
//   success: function (data) {
//     $(data.news).each(function (index, value) {
//       $('ul').append('<li class="title">' + value.title + '</li>');
//       $('ul').append('<li class="details">' + value.details + '</li>');
//     });
//   },
// });
