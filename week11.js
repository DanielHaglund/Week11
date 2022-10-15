// winning requirements
const squares = Array.from(document.querySelectorAll(".square"));
const winner = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,6,9],[3,5,7],[1,4,7],[2,5,8]];
let firstPlayer = [], secondPlayer = [], count = 0;
// checking to see if won
function check(array){
    let gameResult = false;
    for(let item of winner){
        let result = item.every(val => array.indexOf(val) !== -1);
        if(result){
            gameResult = true;
        }
    } return gameResult;
}
// restart button
function restart(wp){
    const game = document.createElement("div");
    const replay = document.createElement("button");
    const player = document.createTextNode(wp);

    game.classList.add("winner");

    game.appendChild(player);

    replay.appendChild(document.createTextNode("Restart"));

    replay.onclick = function() { restart() };

    game.appendChild(replay);

    document.body.appendChild(game);
}
// way to get X and O onto the board
function turns(){
    if(this.classList == "square"){
        count++;
        if(count%2 !== 0){
            this.classList.add("X");
            firstPlayer.push(Number(this.dataset.index));
            if(check(firstPlayer)){
                winnerPlayer("Player 1 Wins");
                return true;
            }
        } else {
            this.classList.add("O");
            secondPlayer.push(Number(this.dataset.index));
            if(check(secondPlayer)){
                winnerPlayer("Player 2 Wins");
                return true;
            }
        }
        if(count === 9){
            winnerPlayer("Draw");
        }
    }
}

squares.forEach(squares => squares.addEventListener("click", turns));

function restartGame(){
    const gameBoard = document.querySelector(".winner");
    firstPlayer = [];
    secondPlayer = [];
    count = 0;
    gameBoard.remove();
    [].forEach.call(squares, function(reset) {
        reset.classList.remove("X");
        reset.classList.remove("O");
    });
}
