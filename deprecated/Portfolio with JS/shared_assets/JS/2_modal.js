/*========================================== adding a modal to download buttons (case 2)==========================================*/

$(document).ready(function () {
  let selectedFile = "";

  // determining which button was clicked
  $("#pdf-cv, #word-cv").on("click", function () {
    selectedFile = $(this).data("file"); // Store file path
  });

  // managing form submission
  $("#downloadForm").on("submit", function (e) {
    e.preventDefault();

    // getting user input
    let NAME = $("#userName").val().trim();
    let EMAIL = $("#userEmail").val().trim();

    // Vvalidation
    let valid = true;
    let errorMessages = [];

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!NAME) {
      valid = false;
      errorMessages.push("Please provide your Name or Company Name.");
    }

    if (!EMAIL) {
      valid = false;
      errorMessages.push("Email cannot be empty.");
    } else if (!emailRegex.test(EMAIL)) {
      valid = false;
      errorMessages.push("Please enter a valid email address.");
    }

    if (!valid) {
      alert(errorMessages.join("\n"));
      return;
    }

    // temporary fix: saving to local storage instead of a DB
    localStorage.setItem("userName", NAME);
    localStorage.setItem("userEmail", EMAIL);

    // Add this inside your `$('#downloadForm').on('submit', function (e) { ... }` block,
    // just before hiding the modal

    $.ajax({
      type: "POST",
      url: "save-info.php",
      data: {
        name: NAME,
        email: EMAIL,
      },
      success: function (response) {
        console.log("Data saved successfully:", response);
      },
      error: function () {
        console.error("Error saving data.");
      },
    });

    console.log("Stored Name or Company: " + localStorage.getItem("userName"));
    console.log("Stored Email: " + localStorage.getItem("userEmail"));

    // closing modal
    let modal = bootstrap.Modal.getInstance(
      document.getElementById("downloadModal")
    );
    modal.hide();

    // downloading CV
    setTimeout(() => {
      if (selectedFile) {
        const a = document.createElement("a");
        // CV in a new window
        a.href = selectedFile;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        alert("No file selected.");
      }
    }, 500);
  });

  // debug
  console.log("Modal download script loaded.");
});
