"use strict";

/* OPTIONAL: CARROUSEL FOR PAINTING PROGRESS with Vanilla JS for comparison
https://www.cssscript.com/interactive-3d-rotating-gallery/ 

    let imageCon = document.querySelector(".image-container");
    let prevEl = document.getElementById("prev");
    let nextEl = document.getElementById("next");
    let x=0;
    let timer=0;

    
    prevEl.addEventListener("click",()=>{
      x=x+45;
      clearTimeout(timer);
      updateImage();
    });
    nextEl.addEventListener("click",()=>{
      x=x-45;
      clearTimeout(timer);
      updateImage();
    });
    function updateImage(){
      imageCon.style.transform=`perspective(1000px) rotateY(${x}deg)`;
      timer=setTimeout(()=>{
          x=x-45;
          updateImage();
      },3000);
    }
    updateImage();

*/
// another option is https://www.w3schools.com/howto/howto_js_slideshow.asp 
// FETCHING MORE WALRUSES with AJAX 
$(document).ready(function () {
  $("#extra-walruses").hide(); // hidden once page loads

  $("#less-walruses").click(function () {
    $("#extra-walruses").hide();
  });
  $("#more-walruses").click(function () {
    $("#extra-walruses").show();
  }); //testing

  console.log('fetching walruses');
});
/*========================================== adding effects on hover (case 4) ==========================================*/
// applicable to paintings on Hobbies page

$(document).ready(function () {
  // stating with grayscale on all images
  $('.watercolor-art-gallery .img-fluid').css('filter', 'grayscale(0.70)');
  $('.paintings img').hover(function () {
    // on hover, no grayscale
    $(this).css({
      'transform': 'scale(1.1)',
      'transition': '0.3s ease-in-out',
      'filter': 'grayscale(0)'
    }); // no hover, yes grayscale
  }, function () {
    $(this).css({
      'transform': 'scale(1)',
      'transition': '0.3s ease-in-out',
      'filter': 'grayscale(0.70)'
    });
  }); //testing 

  console.log("grayscale should be working in Hobbies.");
});