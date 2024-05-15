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
endMessage.style.marginTop = '30px'
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
        currentPlayer = (currentPlayer===players[0])?players[1]:players[0];
        if(currentPlayer==players[0]){
            endMessage.textContent = `X's turn`
        }
        else{
            endMessage.textContent = `O's turn`
        }
    })
}