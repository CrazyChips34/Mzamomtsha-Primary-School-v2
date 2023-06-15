//board
var blockSize = 25;
var rows = 25;
var cols = 25;
var board;
var context;

var score = 0;
var highScore = 0;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//food 
var foodX;
var foodY;

var gameOver = false

function startGame() {
    resetGame(); // reset the game state
    update(); //start the game loop 
}

function endGame() {
    gameOver = true; // set the game over flag to true
    showGameOverAlert(); // show the game over alert
}

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); // used for drawings on the board


    placefood();
    document.addEventListener("keyup", changeDirection);
    //update();
    setInterval(update, 1000/10); //100 milliseconds
}

function update() {
    // clear the board
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height); 
    
    // draw the food
    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    /*context.fillStyle="blue";
    context.fillRect(foodX, foodY, blockSize, blockSize)*/

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placefood();
        score += 10; // increment the score by 10 (or any other vulue you want)
    }

    if (score > highScore) {
        highScore = score; // update the high score if the current score is higher
    }


    for (let i = snakeBody.length-1; i >0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    // draw the snake 
    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    // draw the score 
    context.fillStyle = "white";
    context.font = "15px Arrial";
    context.fillText("Score: " + score, 20, 20); // top left corner

    // draw the high score
    context.fillStyle = "white";
    context.font = "15px Arrial";
    context.fillText("High Score: " + highScore, 20, 40); // below the score

    //game over conditions
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        showGameOverAlert("GAME OVER! Your Score: " + score + "High Score: " + highScore); //display the final score and high score in the game over alert 
    }

    for ( let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            showGameOverAlert("GAME OVER")
        }
    }

}
s
function showGameOverAlert() {
    alert("GAME OVER! Your Score: " + score + "High Score: " + highScore); //display the final score and high score in the game over alert 
    if (confirm("Do You Want to Play Again?")) {
        resetGame(); // call the function to reset the Game
    } else {
        // handle any other action you want to take when the play choose not to play again
    }
}

function resetGame() {
    // Reset all the necessary variables and states to start a new game
    score = 0;
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    velocityX = 0;
    velocityY = 0;
    snakeBody = [];
    placefood();
    gameOver = false;
} 

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

function placefood() {
    //0-1) *cols -> (0-19.9999) -> (0-19) * 25
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random()* rows) * blockSize;
    //score = Math.floor(Math.random() * 5 + 1) * 10; // generate a random score between 10 and 50 (mulitiples of 10)
}
