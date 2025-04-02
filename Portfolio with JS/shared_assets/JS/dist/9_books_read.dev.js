"use strict";

// adding the books read slider
$(document).ready(function () {
  // all panels start hidden
  $(".panel").hide(); // reveal panel onclick

  $(".flip").click(function () {
    $(this).children(".panel").slideToggle("slow");
  });
});
console.log('2222');