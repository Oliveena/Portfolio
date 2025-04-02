"use strict";

/*========================================== highlighting active navbar element (Case 1)==========================================*/
// highlighting active navbar element (Case 1) 
$(document).ready(function () {
  //getting the name from the path after the slash (initialization)
  var pathname = window.location.pathname.split('/').pop(); // looping through each a element to find a match (processing)

  $('.navbar-nav .navbar-item').each(function () {
    var link = $(this).find('a'); //  comparing for a match; if match: add 'active'

    if (link.attr('href') === pathname) {
      $(this).addClass('active');
      link.attr('aria-current', 'page'); // accessibility

      console.log(link.attr('href'), pathname);
    }
  }); // testing

  console.log("highlighting active navbar element (Case 1)");
});