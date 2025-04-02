"use strict";

/*========================================== using Google Books API key (CASE 9) ========================================== */
function searchBooks() {
  // declaring variables
  var search = document.getElementById('search').value;
  var apiKey = 'AIzaSyBz1eVKan_8rxl22fXIThv75xcL4Q0yepY';
  var url = "https://www.googleapis.com/books/v1/volumes?q=".concat(search, "&key=").concat(apiKey); // fetching data

  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    displayBooks(data.items);
  })["catch"](function (error) {
    return console.error('Error fetching data: ', error);
  }); // warning user
}

function displayBooks(books) {
  // declaring element that will hold the results
  var bookResults = document.getElementById('bookResults');
  bookResults.innerHTML = ''; // empty until books load

  console.log('dispalying books');
  books.forEach(function (book) {
    // looping through every fetched book
    var bookDiv = document.createElement('div');
    bookDiv.classList.add('book'); // declaring the variables we will initialize with the API 

    var title = book.volumeInfo.title;
    var authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author';
    var img = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';
    var description = book.volumeInfo.description ? book.volumeInfo.description : 'No description available.';
    var infoLink = book.volumeInfo.infoLink; // populating the div with info fetched by the API 

    bookDiv.innerHTML = "\n        <img src=\"".concat(img, "\" alt=\"").concat(title, "\">\n        <h3>").concat(title, "</h3>\n        <p><strong>Authors:</strong> ").concat(authors, "</p>\n        <p>").concat(description, "</p>\n        <a href=\"").concat(infoLink, "\" target=\"_blank\">More info</a>\n      "); // appending the books to the bookResults elements

    bookResults.appendChild(bookDiv); //debug

    console.log('why');
  });
}