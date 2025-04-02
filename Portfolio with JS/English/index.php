<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>admin@anatara.fsd13.ca Index Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        .button-container {
            margin-top: 30px;
        }
        .project-button {
            font-size: 18px;
            padding: 15px 30px;
            margin: 10px;
            cursor: pointer;
            background-color:rgb(205, 255, 206); 
            color: white;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .project-button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

    <h1>admin@anatara.fsd13.ca Index Page</h1>
    <h2>Welcome</h2>
    <p>She's learning how to host things. Hooray!</p>


    <div class="button-container">
        <form action="" method="POST">
            <button class="project-button" type="submit" name="project" value="day03blog">Day 03 Blog</button>
            <button class="project-button" type="submit" name="project" value="midterm1auctions">Midterm 1 Auctions</button>
            <button class="project-button" type="submit" name="project" value="Portfolio withJS">Portfolio withJS</button>
        </form>
    </div>

    <?php

    if (isset($_POST['project'])) {

        $project = $_POST['project'];

        $projects = array(
            'day03blog' => '/day03blog/index.php',
            'midterm1auctions' => '/midterm1auctions/index.php',
            'Portfolio withJS' => '/Portfolio%20withJS/English/EN_portfolio_landing_page.html',  
        );

        if (array_key_exists($project, $projects)) {
            header('Location: ' . $projects[$project]);
            exit;
        } else {
            echo "<p>Invalid project selection.</p>";
        }
    }
    ?>

</body>
</html>
