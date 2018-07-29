$(document).ready(function () {
    //Variables
    //Generate computer number (19-120)
    //Generate values for each crystal (1-12)

    var computerNumber = parseInt([Math.floor(Math.random() * (120 - 19 + 1) + 19)]);

    var crystalOneValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Crystal 1: " + crystalOneValue);

    var crystalTwoValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Crystal 2: " + crystalTwoValue);

    var crystalThreeValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Crsytal 3: " + crystalThreeValue);

    var crystalFourValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
    console.log("Crystal 4: " + crystalFourValue);

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
        console.log("losses: " + losses);
    };

    //Updated Html at the start of the game
    updateHtml();

    //Reset game function
    function reset() {
        computerNumber = parseInt([Math.floor(Math.random() * (120 - 19 + 1) + 19)]);

        crystalOneValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Crystal 1: " + crystalOneValue);

        crystalTwoValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Crystal 2: " + crystalTwoValue);

        crystalThreeValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Crsytal 3: " + crystalThreeValue);

        crystalFourValue = parseInt([Math.floor(Math.random() * (12) + 1)]);
        console.log("Crystal 4: " + crystalFourValue);

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
            console.log("losses: " + losses);
            reset();
            updateHtml();
        };
    };

    //On-click events for each crystal 
    $(".crystal-1").on("click", function () {
        userNumber = userNumber + crystalOneValue;
        $(".you-win-lose").text("");
        winOrLose();
        console.log("Total score: " + userNumber);
        $(".total-score").text(userNumber);
    });

    $(".crystal-2").on("click", function () {
        userNumber = userNumber + crystalTwoValue;
        $(".you-win-lose").text("");
        winOrLose();
        console.log("Total score: " + userNumber);
        $(".total-score").text(userNumber);
    });

    $(".crystal-3").on("click", function () {
        userNumber = userNumber + crystalThreeValue;
        $(".you-win-lose").text("");
        winOrLose();
        console.log("Total score: " + userNumber);
        $(".total-score").text(userNumber);
    });

    $(".crystal-4").on("click", function () {
        userNumber = userNumber + crystalFourValue;
        $(".you-win-lose").text("");
        winOrLose();
        console.log("Total score: " + userNumber);
        $(".total-score").text(userNumber);
    });


});