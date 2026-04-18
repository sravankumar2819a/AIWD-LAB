<!DOCTYPE html>
<html>
<head>
    <title>Event Countdown Timer</title>
    <style>
        body {
            font-family: Arial;
            text-align: center;
            background-color: #f4f4f4;
        }

        .container {
            width: 60%;
            margin: auto;
            background: white;
            padding: 20px;
            margin-top: 50px;
            box-shadow: 0 0 10px gray;
        }

        #countdown {
            font-size: 20px;
            font-weight: bold;
            color: darkblue;
            margin: 15px 0;
        }

        #closed {
            color: red;
            font-size: 22px;
            font-weight: bold;
        }

        form {
            margin-top: 20px;
        }

        input {
            padding: 8px;
            margin: 5px;
        }

        button {
            padding: 8px 15px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<div class="container">

    <h2>Tech Conference 2026</h2>

    <h3>Registration Ends In:</h3>
    <div id="countdown"></div>
    <div id="closed"></div>

    <form id="regForm">
        <input type="text" placeholder="Enter Name" required><br>
        <input type="email" placeholder="Enter Email" required><br>
        <button type="submit">Register</button>
    </form>

</div>

<script>

    // Set future event date (YYYY, MM-1, DD, HH, MM, SS)
    let eventDate = new Date(2026, 11, 31, 23, 59, 59);

    let countdownDisplay = document.getElementById("countdown");
    let closedMessage = document.getElementById("closed");
    let form = document.getElementById("regForm");

    let timer = setInterval(function() {

        let now = new Date().getTime();
        let distance = eventDate - now;

        if (distance <= 0) {
            clearInterval(timer);
            countdownDisplay.innerHTML = "";
            closedMessage.innerHTML = "Registration Closed";
            form.style.display = "none";
            return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) 
                    / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) 
                    / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML =
            days + "d " +
            hours + "h " +
            minutes + "m " +
            seconds + "s ";

    }, 1000);

</script>

</body>
</html>
