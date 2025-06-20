/*========================================== using Google Books API key (CASE 9) ========================================== */

function searchBooks() {
  // declaring variables
  let search = document.getElementById('search').value;
  let apiKey = 'AIzaSyBz1eVKan_8rxl22fXIThv75xcL4Q0yepY';
  let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`;

  // fetching data
  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayBooks(data.items);
    })
    .catch(error => console.error('Error fetching data: ', error)); // warning user
}

function displayBooks(books) {
  // declaring element that will hold the results
  let bookResults = document.getElementById('bookResults');
  bookResults.innerHTML = ''; // empty until books load
  console.log('dispalying books')

  books.forEach(book => {
    // looping through every fetched book
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    // declaring the variables we will initialize with the API 
    let title = book.volumeInfo.title;
    let authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author';
    let img = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';
    let description = book.volumeInfo.description ? book.volumeInfo.description : 'No description available.';
    let infoLink = book.volumeInfo.infoLink;


    // populating the div with info fetched by the API 
    bookDiv.innerHTML = `
        <img src="${img}" alt="${title}">
        <h3>${title}</h3>
        <p><strong>Authors:</strong> ${authors}</p>
        <p>${description}</p>
        <a href="${infoLink}" target="_blank">More info</a>
      `;

    // appending the books to the bookResults elements
    bookResults.appendChild(bookDiv);

    //debug
    console.log('why');
  });
}