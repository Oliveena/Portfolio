// Projects page: mouse enter, mouse leave effects

// loop thru each
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    // applying scaling and shadows
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";

    // change font color
    let cardText = card.querySelector('.card-body p');
    if (cardText) {
      cardText.style.color = "#9c4764,"; // brown: #9c4764 from _variables.scss
    }
  });

  card.addEventListener('mouseleave', () => {
    // removing effects
    card.style.transform = "scale(1)";
    card.style.boxShadow = "none";

    // removing color
    let cardText = card.querySelector('.card-body p');
    if (cardText) {
      cardText.style.color = "";
      console.log('11111111');
    }
  });
});

//testing 
console.log('Projects page: mouse enter, mouse leave effects');
