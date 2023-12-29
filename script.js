'use strict';
window.onload = function () {

    // Initialize variable and value start
    let userInput;
    let randomNum = Math.round(Math.random() * (20 - 1) + 1);
    let userInputbox = document.getElementsByClassName('guess')[0];
    let checkBtn = document.getElementsByClassName('check')[0];
    let message = document.getElementsByClassName('message')[0];
    let displayNum = document.getElementsByClassName('number')[0];
    let totalRoundDis = document.getElementsByClassName('score')[0];
    let highScoreDis = document.getElementsByClassName('highscore')[0];
    let again = document.getElementsByClassName('again')[0];
    let totalRound = 20;
    let highScore = 0;
    totalRoundDis.innerHTML = (totalRound);
    highScoreDis.innerHTML = (highScore);


    console.log(randomNum);
    // Initialize variable and value end

    // Event Calling start
    checkBtn.addEventListener("click", checkValue);
    again.addEventListener("click", playAgain);

    // Event Calling end


    // all functions here start
    function checkValue() {
        if (totalRound > 0) {
            totalRound--;
            totalRoundDis.innerHTML = (totalRound);
            userInput = (parseInt(userInputbox.value));
            if (isNaN(userInput) || userInput === 0) {
                message.innerHTML = ("⛔️ No number!");
            } else if (userInput >= 21) {
                message.innerHTML = ("📈 Too high!");
            } else if ((userInput > 0) && (userInput <= 20)) {
                if (userInput === randomNum) {
                    displayNum.innerHTML = (userInput);
                    document.body.style.backgroundColor = "#60b347";
                    message.innerHTML = ("🎉 Correct Number!");
                    highScoreDis.innerHTML = (totalRound);
                } else if (userInput > randomNum) {
                    message.innerHTML = ("📈 Too high!");
                } else {
                    message.innerHTML = ("📉 Too low!");
                }
            }
        } else {
            message.innerHTML = ("💥 You lost the game!");
        }
    }

    function playAgain() {
        totalRound=20;
        userInput='';
        totalRoundDis.innerHTML = (totalRound);
        document.body.style.backgroundColor = "#222";
        message.innerHTML = ("Start guessing...");
        displayNum.innerHTML = ("?");
        userInputbox.value="";

    }



    // all functions here end




}