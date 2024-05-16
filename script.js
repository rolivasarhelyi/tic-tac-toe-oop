// selecting essential dom elements
const board = document.querySelector('.play-area');
const squares = document.querySelectorAll('.play-area__tile');

// Players Array  contains player

const players = ['X','O'];

// default player turn
let currentPlayer = players[0];

// Player turn display content
const endMessage = document.createElement('h2')
endMessage.textContent = `X's turn!`
endMessage.style.marginTop = '50px'
endMessage.style.textAlign='center'
board.after(endMessage)


// winning combination of players 

const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



for(let i=0; i<squares.length; i++){
    squares[i].addEventListener('click',()=>{

        // displaying the players on click to the square
        squares[i].textContent    = currentPlayer


        // display the winner 
        if(checkForWinner(currentPlayer)){
            endMessage.textContent = `player winns ${currentPlayer}`
            console.log(currentPlayer)
            return
        }

        // Players turn logic
        currentPlayer = (currentPlayer===players[0])?players[1]:players[0];
        if(currentPlayer==players[0]){
            endMessage.textContent = `X's turn`
        }
        else{
            endMessage.textContent = `O's turn`
        }
    })
}


// function to check the winner

function checkForWinner(currentPlayer){

    for(let i=0; i<winning_combinations.length; i++){

        // extract winning combination single array values using destructring
        const [a,b,c] = winning_combinations[i];

       console.log(squares[a].textContent===currentPlayer);
       console.log(squares[b].textContent===currentPlayer);
       console.log(squares[c].textContent===currentPlayer);

       if(squares[a].textContent===currentPlayer && squares[b].textContent===currentPlayer && squares[c].textContent===currentPlayer){
        return true
       }
    }
    return false
}