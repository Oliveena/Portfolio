/*========================================== adding a modal to download buttons (case 2)==========================================*/

//adding a modal to download buttons (case 2)
$(document).ready(function () {
    $('#downloadForm').on('submit', function (e) {
        e.preventDefault();
        // making sure we get the form after its loaded

        document.getElementById('downloadForm').addEventListener('submit', function (e) {
            e.preventDefault();

            // getting the CV link from the data-file attribute
            let file = $(this).data('file');

            // storing the file path for after form submission
            $('#download-btn').data('file', file);

            // storing user entry
            let NAME = document.getElementById('userName').value.trim();
            let EMAIL = document.getElementById('userEmail').value.trim();

            //creating validation variables
            let valid = true;
            let errorMessages = [];

            // validating email with regex
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

            // catching empty data entry
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

            // catching errors
            if (!valid) {
                alert(errorMessages.join("\n"));
                return;
            }

            // storing user entry in local storage
            localStorage.setItem('userName', NAME);
            localStorage.setItem('userEmail', EMAIL);

            // debug
            console.log("Stored Name or Company: " + localStorage.getItem('userName'));
            console.log("Stored Email: " + localStorage.getItem('userEmail'));

            // hide modal
            let modal = bootstrap.Modal.getInstance(document.getElementById('downloadModal'));
            modal.hide();

            // triggering CV download after it closes
            setTimeout(function () {
                // getting the file path we stored at first
                let file = $('#download-btn').data('file');

                if (file) {
                    // downloading the file
                    window.location.href = file;
                }
            }, 500);
        });
    });

    //testing
    console.log("adding a modal to download buttons (case 2)");
});
