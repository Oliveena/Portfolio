"use strict";

/*========================================== review carrousel + painting carrousel (case 3) ==========================================*/

/*========================================== also form validation (case 5) ==========================================*/
// CARROUSEL FOR MAIN PAGE: REVIEWS, using jQuery
// array
$(document).ready(function () {
  var reviews = [{
    text: "Good portfolio.",
    name: "somebody"
  }, {
    text: "Very nice.",
    name: "somebody else"
  }, {
    text: "Super duper.",
    name: "someone from your neighborhood"
  }, {
    text: "Solid results.",
    name: "your favorite colleague"
  }, {
    text: "I like the color palette.",
    name: "your beloved aunt"
  }, {
    text: "Very pleasant, I approve.",
    name: "your childhood friend"
  }]; // displaying reviews with a f(x)

  function displayReviews() {
    // reset the display
    $('#reviews-display').empty(); // creating a carrousel item for each array item

    reviews.forEach(function (review, index) {
      var activeClass = index === 0 ? 'active' : ''; // first in array becomes active

      $('.carousel-inner').append("\n        <div class=\"carousel-item ".concat(activeClass, "\">\n            <div class=\"review\">\n                <p>\"").concat(review.text, "\"</p>\n                <p><em>- ").concat(review.name, "</em></p>\n            </div>\n        </div>\n    "));
    });
  } // 1) FORM ID === reviewForm
  // form submission


  document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault(); // getting user data

    var reviewText = document.getElementById('reviewText').value.trim();
    var reviewName = document.getElementById('reviewName').value.trim(); // if form is empty

    if (!reviewText || !reviewName) {
      alert('Please enter your name and your review.');
      return;
    } // validation regexes


    var nameRegex = /^[A-Za-z0-9\s.,'-]+$/;

    if (!nameRegex.test(reviewName)) {
      alert('Name may contain letters, numbers, spaces, commas, periods, hyphens. Thank you for your understanding.');
      return;
    }

    var reviewRegex = /^[\w\s,.'-]{3,500}$/;

    if (!reviewRegex.test(reviewText)) {
      alert('Reviews may contain between 3 to 500 characters.');
      return;
    } // pushing the review to the array


    reviews.push({
      text: reviewText,
      name: reviewName
    });
    alert('Thank you for submitting a review. Have a great day!'); // debug

    console.log("Reviewer: " + localStorage.getItem('reviewName'));
    console.log("New review: " + localStorage.getItem('reviewText')); // displaying all reviews 

    displayReviews(); // debug again

    console.log("All reviews now displayed."); // resetting the form

    document.getElementById('reviewForm').reset();
  }); // calling the display 

  displayReviews(); // testing

  console.log('review carrousel + painting carrousel (case 3)');
});