
//Variables
//Generate computer number (19-120)
//Generate values for each crystal (1-12)

var computerNumber = parseInt([Math.floor(Math.random() * 120) + 19]);
console.log("Number to match: " + computerNumber);

var crystalOneValue = parseInt([Math.floor(Math.random() * 12) + 1]);
console.log("Crystal 1: " + crystalOneValue);

var crystalTwoValue = parseInt([Math.floor(Math.random() * 12) + 1]);
console.log("Crystal 2: " + crystalTwoValue);

var crystalThreeValue = parseInt([Math.floor(Math.random() * 12) + 1]);
console.log("Crsytal 3: " + crystalThreeValue);

var crystalFourValue = parseInt([Math.floor(Math.random() * 12) + 1]);
console.log("Crystal 4: " + crystalFourValue);

var userNumber = 0;

var wins = 0;
var loses = 0;

//Update HTML function
//Make fucntions that update wins-loses
var updateHtml = function () {
    $(".computer-number").text(computerNumber);
    $(".wins").text(wins);
    console.log("Wins: " + wins);
    $(".loses").text(loses);
    console.log("Loses: " + loses);
};

updateHtml;

//Reset game function
var reset = function () {
    computerNumber = parseInt([Math.floor(Math.random() * 120) + 19]);
    console.log("Number to match: " + computerNumber);

    crystalOneValue = parseInt([Math.floor(Math.random() * 12) + 1]);
    console.log("Crystal 1: " + crystalOneValue);

    crystalTwoValue = parseInt([Math.floor(Math.random() * 12) + 1]);
    console.log("Crystal 2: " + crystalTwoValue);

    crystalThreeValue = parseInt([Math.floor(Math.random() * 12) + 1]);
    console.log("Crsytal 3: " + crystalThreeValue);

    crystalFourValue = parseInt([Math.floor(Math.random() * 12) + 1]);
    console.log("Crystal 4: " + crystalFourValue);
};

//Function when user reaches or exceeds desired number
var winOrLose = function () {
    if (userNumber === computerNumber) {
        wins++;
        $(".you-win-lose").text("You win!");
        console.log("Wins: " + wins);
        reset;
        updateHtml;
    };

    if (userNumber > computerNumber) {
        loses++;
        $(".you-win-lose").text("You lose!");
        console.log("Loses: " + loses);
        reset;
        updateHtml;
    };
};

//Make on-click events for each crystal 
$(document).ready(function () {

    $(".crystal-1").on("click", function () {
        userNumber = userNumber + crystalOneValue;
        winOrLose;
        console.log("Total score: " + userNumber);
        $(".total-score").text(userNumber);
    });

    $(".crystal-2").on("click", function () {
        userNumber = userNumber + crystalTwoValue;
        winOrLose;
        console.log("Total score: " + userNumber);
        $(".total-score").text(userNumber);
    });

    $(".crystal-3").on("click", function () {
        userNumber = userNumber + crystalThreeValue;
        winOrLose;
        console.log("Total score: " + userNumber);
        $(".total-score").text(userNumber);
    });

    $(".crystal-4").on("click", function () {
        userNumber = userNumber + crystalFourValue;
        winOrLose;
        console.log("Total score: " + userNumber);
        $(".total-score").text(userNumber);
    });


});