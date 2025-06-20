/*========================================== fluidifying transitions (case 1)==========================================*/

// fluidifying transitions (case 1)
$(document).ready(function () {
    $('a').on('click', function (e) {
        e.preventDefault();

        // declaring target URL (initialization)
        let url = $(this).attr('href');

        // adding loading class to new URL
        $('body').addClass('loading');

        // after 1s, go to new page
        setTimeout(function () {
            window.location.href = url;
        }, 1000);
    });

    // testing
    console.log('fluidifying transitions (case 1)');
});


// attempted using AJAX to prevent a blinking effect, this is broken **
// wrapped everything between navbar and footer into div id="content" for it to function well
/*
$(document).ready(function () {
    // on anchor element click
    $('a').on('click', function (e) {
        e.preventDefault(); 

        // declaring target URL
        let url = $(this).attr('href');

        // adding 'loading' class to current page
        $('body').addClass('loading');

        // applying fade-out with AJAX for navbar
        if ($(this).hasClass('nav-link')) {
            $('#content').fadeOut(500, function () {
                loadNewContent(url);
            });
        } else {
            // applying 1s delay to non-navbar links
            setTimeout(function () {
                window.location.href = url;
            }, 1000);
        }
    });

    // loading new content
    function loadNewContent(targetPage) {
        $.ajax({
            url: targetPage, 
            type: 'GET',
            success: function (data) {
                var newContent = $(data).find('#content').html();

                // fade-in new content
                $('#content').html(newContent).fadeIn(500); 
            },
            // catching errors
            error: function () {
                console.log('Error loading the page');
                alert("Something went wrong while loading the new page.");
            }
        });
    }
});

*/