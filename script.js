'use strict';
window.onload = function () {
    // Initialize variable and value start
    let userInput;
    let randomNum ;
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
    // Initialize variable and value end
    // Event Calling start
    checkBtn.addEventListener("click", checkValue);
    again.addEventListener("click", playAgain);
    randomNum=randomNumGen();
    // console.log(randomNum);

    // Event Calling end

    // all functions here start
  
    function randomNumGen(){
        return Math.round(Math.random() * (20 - 1) + 1);

    }
    function checkValue() {
        if (totalRound > 0) {
            totalRound--;
            userInput = (parseInt(userInputbox.value));
            if (isNaN(userInput) || userInput === 0) {
                message.innerHTML = ("⛔️ No number!");
            } else if (userInput >= 21) {
                message.innerHTML = ("📈 Too high!");
            } else if ((userInput > 0) && (userInput <= 20)) {
                if (userInput === randomNum) {
                    totalRound++;
                    displayNum.innerHTML = (userInput);
                    document.body.style.backgroundColor = "#60b347";
                    message.innerHTML = ("🎉 Correct Number!");

                    if(highScore==0){
                        highScoreDis.innerHTML = (totalRound);
                        highScore=totalRound;
                    }else if(highScore<=totalRound){
                        highScoreDis.innerHTML = (totalRound);
                        highScore=totalRound;
                    }
                } else if (userInput > randomNum) {
                    message.innerHTML = ("📈 Too high!");
                } else {
                    message.innerHTML = ("📉 Too low!");
                }
            }
            totalRoundDis.innerHTML = (totalRound);

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
        randomNum=randomNumGen();
        // console.log(randomNum);

    }
    // all functions here end



}