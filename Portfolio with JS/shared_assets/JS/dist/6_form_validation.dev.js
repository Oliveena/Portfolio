"use strict";

/*========================================== form validation (case 5) ==========================================*/
// 2) Form ID === #contactForm
$(document).ready(function () {
  // on submit listener
  $('#contactForm').on('submit', function (event) {
    // get user entries
    var name = $('#name').val();
    var email = $('#email-address').val();
    var phone = $('#phone').val();
    var message = $('textarea').val(); // catching empty form

    if (name === '' || email === '' || message === '') {
      event.preventDefault();
      alert('Please fill out name, email and message');
    } // validation


    var nameRegex = /^[A-Za-z0-9\s.,'-]+$/;

    if (!nameRegex.test(name)) {
      alert('Name may contain letters, numbers, spaces, commas, periods, and hyphens. Thank you for your understanding.');
      event.preventDefault();
      return;
    }

    var emailRegex = /^[A-Za-z0-9\s.,'-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;

    if (!emailRegex.test(email)) {
      alert('Email may contain letters, numbers, spaces, commas, periods, hyphens and @. Thank you for your understanding.');
      event.preventDefault();
      return;
    }

    var phoneRegex = /^[0-9\s.-]+$/;

    if (phone && !phoneRegex.test(phone)) {
      alert('Phone number may contain numbers, spaces, periods, and hyphens. Thank you for your understanding.');
      event.preventDefault();
      return;
    } // storing user data in local storage
    // optimally, a server would send it to our email


    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    localStorage.setItem('userMessage', message); // debug

    console.log("Stored Message: " + localStorage.getItem('userMessage'));
    console.log("Stored Name: " + localStorage.getItem('userName'));
    console.log("Stored Email: " + localStorage.getItem('userEmail')); // alert if message sent

    alert('Thank you for sending a message. Have a great day!');
  });
}); // applicable on hobbies book suggestions page
// 3) Form ID === #bookForm

$(document).ready(function () {
  // on submit listener
  $('#bookForm').on('submit', function (event) {
    // get user entries
    var bookTitle = $('#bookTitle').val();
    var bookAuthor = $('#bookAuthor').val(); // user is allowed to submit empty form, after all, they're allowed to edit it post-push
    // validation (idem as form above)

    var bookTitleRegex = /^[A-Za-z0-9\s.,'-]+$/;

    if (!bookTitle.test(bookTitle)) {
      alert('Book title contain letters, numbers, spaces, commas, periods, and hyphens.');
      event.preventDefault();
      return;
    }

    var bookAuthorRegex = /^[A-Za-z0-9\s.,'-]+$/;

    if (!bookAuthorRegex.test(bookAuthor)) {
      alert('Author name may contain letters, numbers, spaces, commas, periods, and hyphens.');
      event.preventDefault();
      return;
    }

    localStorage.setItem('bookTitle', bookTitle);
    localStorage.setItem('bookAuthor', bookAuthor); // debug

    console.log("Stored Book Title: " + localStorage.getItem('bookTitle'));
    console.log("Stored Book Author: " + localStorage.getItem('bookAuthor'));
    alert('Thank you for suggesting a book! We appreciate your input.');
  });
});