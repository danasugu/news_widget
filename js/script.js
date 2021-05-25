'use strict';
const API_URL = 'http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8';
const loadPageOneElement = document.querySelector('.news-content');

async function getNews() {
  loadPageOneElement.innerHTML = '';
  const response = await fetch(API_URL);
  const json = await response.json();
  const pageOne = json.news.slice(0, 5);
  const pageTwo = json.news.slice(5, 10);
  const pageThree = json.news.slice(10, 15);

  pageOne.forEach((titleItem) => {
    loadPageOneElement.innerHTML += `
    <h3 class="news-title">${titleItem.title}</h3>
    <p class="news-details">${titleItem.details}</p>`;

    const titleElement = document.createElement('h3');
    titleElement.classList.add('news-title');
    titleElement.title = titleItem;

    loadPageOneElement.appendChild(titleElement);
  });
}
getNews();
getNews();
