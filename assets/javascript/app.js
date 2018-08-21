//timer
var timer = 50;

//score keeping

var currentQuestion = 0; var correctAns; var incorrectAns; var userAns; var seconds; var time; var answered;

var gameQuestions = [q1 = {
    question: "What is the name of the mouse that Jon wants Garfield to eat?",
    choices: ["Levi", "Davy", "Derek", "Lewis"],
    answer: 3
}, q2 = {
    question: "What is the name of the vet?",
    choices: ["Liz Jones", "Liz Green", "Liz Adam", "Liz Wilson"],
    answer: 3
}, q3 = {
    question: "What song does Odie dance to at the dog show?",
    choices: ["Hey Mama", "Who Let the Dogs Out", "Holla", "I Feel Good"],
    answer: 1
}, q4 = {
    question: "Where is the train going that Garfield first changes the path of?",
    choices: ["Los Angeles", "Seattle", "Boston", "New York"],
    answer: 2
}];

function countTime() {
    timer = 20;
    $("#timeLeft").html("<h5>Time remaining: " + timer + "</h5>");
    time = setInterval(displayTime, 1000);
}

function displayTime() {
    timer--;
    $("#timeLeft").html("<h5>Time remaining: " + timer + "</h5>");
    if(timer < 1){
        clearInterval(timer);
        throw new Error("Times Up");
    }
}


function displayQuesiton() {
    countTime();
    if (currentQuestion = 0){
        $("#questions").html("<h5> "+ gameQuestions[currentQuestion].question + "</h5>");
        //call to displayChoices function to display choices.
    }

    else if (currentQuestion < 4){
        currentQuestion++;
        $("#questions").html("<h5> "+ gameQuestions[currentQuestion].question + "</h5>");
        //call to displayChoices function to display choices.
    }
    else {
        gameOver();
    }
}

function displayChoices() {
    //code to display choices goes here.
    //loop and/or use .each method on the objects within the array.
}

function startGame() {
    console.log("Game has started.");
    displayQuesiton();
}

function newGame() {
    currentQuestion = 0;
    correctAns = 0;
    incorrectAns = 0; 
    startGame();
}

function gameOver() {
    alert("Game is over.")
}

$(document).ready(function () {
    $(".gif").on("click", function () {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        setTimeout(function () {
            $(".gif").remove();
            $("#catStart").remove();
        }, 1600);
        setTimeout(function () {
            startGame();
        },
            1700);
    });
});
