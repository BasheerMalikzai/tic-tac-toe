
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")
const b5 = document.getElementById("b5")
const b6 = document.getElementById("b6")
const b7 = document.getElementById("b7")
const b8 = document.getElementById("b8")
const b9 = document.getElementById("b9")
const buttons = document.getElementsByClassName("button")

let winner_text = document.getElementById("winner")

let currentPlayer = 'X'
let countStrokes = 0;

let gameArray = ['0', '1', '2',
                 '3', '4', '5',
                 '6', '7', '8',]

const checkWinner = () => {
    if (gameArray[0]==gameArray[1] && gameArray[1]==gameArray[2]){
        return gameArray[0];
    }else if (gameArray[3]==gameArray[4] && gameArray[4]==gameArray[5]){
        return gameArray[3];
    }else if (gameArray[6]==gameArray[7] && gameArray[7]==gameArray[8]){
        return gameArray[6];
    }else if (gameArray[0]==gameArray[3] && gameArray[3]==gameArray[6]){
        return gameArray[0];
    }else if (gameArray[1]==gameArray[4] && gameArray[4]==gameArray[7]){
        return gameArray[1];
    }else if (gameArray[2]==gameArray[5] && gameArray[5]==gameArray[8]){
        return gameArray[2];
    }else if (gameArray[0]==gameArray[4] && gameArray[4]==gameArray[8]){
        return gameArray[0];
    }else if (gameArray[2]==gameArray[4] && gameArray[4]==gameArray[6]){
        return gameArray[0];
    }else{
        return null
    }
}

const declareWinner = () => {
    const winner = checkWinner();
    if (winner){
        winner_text.innerText=` Winner: ${winner} `
        for (let i = 0; i < buttons.length; i++){
            buttons[i].disabled = true;
        }
    }
    if (countStrokes===9 && checkWinner() ===null){
        winner_text.innerText=' Match Drawn' 
    }
}

const switchPlayer = (button, gameArrayIndex) =>{
    if (currentPlayer == 'X'){
        currentPlayer = 'O';
    }else{
        currentPlayer = 'X';
    }
    button.disabled=true;
    gameArray[gameArrayIndex] = button.innerText;
    countStrokes++;
    declareWinner();
    
}

b1.addEventListener("click", ()=>{
    b1.innerText = currentPlayer;
    switchPlayer(b1,0);
})

b2.addEventListener("click", ()=>{
    b2.innerText = currentPlayer;
    switchPlayer(b2,1);
})

b3.addEventListener("click", ()=>{
    b3.innerText = currentPlayer;
    switchPlayer(b3,2);
})

b4.addEventListener("click", ()=>{
    b4.innerText = currentPlayer;
    switchPlayer(b4,3);
})

b5.addEventListener("click", ()=>{
    b5.innerText = currentPlayer;
    switchPlayer(b5,4);
})

b6.addEventListener("click", ()=>{
    b6.innerText = currentPlayer;
    switchPlayer(b6,5);
})

b7.addEventListener("click", ()=>{
    b7.innerText = currentPlayer;
    switchPlayer(b7,6);
})

b8.addEventListener("click", ()=>{
    b8.innerText = currentPlayer;
    switchPlayer(b8,7);
})

b9.addEventListener("click", ()=>{
    b9.innerText = currentPlayer;
    switchPlayer(b9,8);
})



