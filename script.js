
const gameBoard = (()=>{



})();

//Factory Function that creates player
const playerFactory = (name, mark) => {
    name;
    mark;

    return{
        name: name,
        mark: mark,
    };
};

const gameObj = (()=>{

    //Creates game board array and adds 9 items
let arr = [];    
for(let i=0; i<9; i++){
    arr.push('');
}
//Selects game boards container
const gameBoardCont = document.querySelector('#gameBoardCont');

//Creates a div in each array item
arr.forEach((element, index)=>{
    const square = document.createElement('div');
    square.classList = 'square';
    // square.textContent = 'X';
    gameBoardCont.appendChild(square);

    //Adds event listener to each div
    square.addEventListener('click', ()=>{
        if(square.textContent == 'X' || square.textContent == 'O'){
            alert('Choose a different square')
        }else{
            square.textContent = activePlayer.mark;
            arr[index] = activePlayer.mark;
            checkWinner();
            if(winner != null){
                
                setTimeout(()=>{alert('Winner: ' + winner) }, 1)
            }
            switchPlayer();
            
        }
    })

    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor = '#D3D3D3';
    });

    square.addEventListener('mouseleave', ()=>{
        square.style.backgroundColor =  'white';
    });




})

    //Creates Players
    const player1 = playerFactory('Player 1', 'X');
    const player2 = playerFactory('Player 2', 'O');

   
    //Initial Game Values
    let activePlayer = player1;
    let winner = null;
    

    //Switches active player 
    const switchPlayer = () => {
        if(activePlayer == player1){
            activePlayer = player2;
            console.log(activePlayer)
        }else{
            activePlayer = player1;
            console.log(activePlayer)
        }
    }

    //checks for a winner
    const checkWinner = ()=> {
        arr.forEach((element)=>{
            if(element == arr[0] && element == arr[1] && element == arr[2] && element != ''){
                winner = activePlayer.name
            }else if(element == arr[3] && element == arr[4] && element == arr[5] && element != ''){
                winner = activePlayer.name
            }else if(element == arr[6] && element == arr[7] && element == arr[8] && element != ''){
                winner = activePlayer.name
            }else if(element == arr[0] && element == arr[4] && element == arr[8] && element != ''){
                winner = activePlayer.name
            }else if(element == arr[2] && element == arr[4] && element == arr[6] && element != ''){
                winner = activePlayer.name
            }else if(element == arr[0] && element == arr[3] && element == arr[6] && element != ''){
                winner = activePlayer.name
            }else if(element == arr[1] && element == arr[4] && element == arr[7] && element != ''){
                winner = activePlayer.name
            }else if(element == arr[2] && element == arr[5] && element == arr[8] && element != ''){
                winner = activePlayer.name
            }

            return('break');
          
        })
    }
    
 
    return{
        activePlayer,
        switchPlayer,
        arr
    }




})();
