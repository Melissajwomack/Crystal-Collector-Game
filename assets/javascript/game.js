$(document).ready(function () {
    //Variables
    //Generates computer number (19-120)
    //Generates values for each crystal (1-12)

    var computerNumber = parseInt([Math.floor(Math.random() * (120 - 19 + 1) + 19)]);

    var crystalOneValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Blue Crystal: " + crystalOneValue);

    var crystalTwoValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Green Crystal: " + crystalTwoValue);

    var crystalThreeValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Purple Crsytal: " + crystalThreeValue);

    var crystalFourValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Yellow Crystal: " + crystalFourValue);

    var userNumber = 0;

    var wins = 0;

    var losses = 0;

    //Update HTML function
    //Function that updates wins and losses
    function updateHtml() {
        $(".computer-number").text(computerNumber);
        console.log("Number to match: " + computerNumber);

        $(".total-score").text(userNumber);
        console.log("Total score: " + userNumber);

        $(".wins").text(wins);
        console.log("Wins: " + wins);

        $(".losses").text(losses);
        console.log("Losses: " + losses);
    };

    //Updates Html at the start of the game
    updateHtml();

    //Reset game function
    function reset() {
        computerNumber = parseInt([Math.floor(Math.random() * (120 - 19 + 1) + 19)]);

        crystalOneValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Blue Crystal: " + crystalOneValue);

        crystalTwoValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Green Crystal: " + crystalTwoValue);

        crystalThreeValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Purple Crystal: " + crystalThreeValue);

        crystalFourValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Yellow Crystal: " + crystalFourValue);

        userNumber = 0;
    };

    //Function when user reaches or exceeds desired number
    function winOrLose() {
        if (userNumber === computerNumber) {
            wins++;
            $(".you-win-lose").text("You win!");
            console.log("WIN");
            console.log("Wins: " + wins);
            reset();
            updateHtml();
        };

        if (userNumber > computerNumber) {
            losses++;
            $(".you-win-lose").text("You lose!");
            console.log("LOSS");
            console.log("Losses: " + losses);
            reset();
            updateHtml();
        };
    };

    //Function to update total score
    function userScore() {
        console.log("Total score: " + userNumber);
        $(".total-score").text(userNumber);
    }

    //Cursor changes to hand while hovering over crystals
    $(".crystal-1, .crystal-2, .crystal-3, .crystal-4").hover(function () {
        $(this).css("cursor", "hand");
    });

    //On-click events for each crystal 
    $(".crystal-1").on("click", function () {
        userNumber = userNumber + crystalOneValue;
        $(".you-win-lose").text("");
        userScore();
        winOrLose();
    });

    $(".crystal-2").on("click", function () {
        userNumber = userNumber + crystalTwoValue;
        $(".you-win-lose").text("");
        userScore();
        winOrLose();
    });

    $(".crystal-3").on("click", function () {
        userNumber = userNumber + crystalThreeValue;
        $(".you-win-lose").text("");
        userScore();
        winOrLose();
    });

    $(".crystal-4").on("click", function () {
        userNumber = userNumber + crystalFourValue;
        $(".you-win-lose").text("");
        userScore();
        winOrLose();
    });


});