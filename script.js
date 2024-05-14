

const inputField = document.querySelectorAll('.play-area__tile');

let playerX  = true;
let PlayerO = false;


inputField.forEach((field)=>{
    field.addEventListener('click',()=>{
        if(playerX){

            field.textContent = "X"
            playerX = false
            PlayerO = true
        }

        else if(PlayerO){
            field.textContent = "O"
            playerX = true;
            PlayerO = false;
        }
    })
})