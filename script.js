
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
    const currentMove = document.querySelector('.currentMove');

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
                    
                    setTimeout(()=>{currentMove.textContent = winner + ' is the winner!' }, 1)
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
    const player1 = playerFactory('Player One', 'X');
    const player2 = playerFactory('Player Two', 'O');

    //Change Player's names
    const changeName = ()=>{
        player1.name = prompt("Enter Player One's name:")
            if(player1.name == null){ player1.name = 'Player One'}
        player2.name = prompt("Enter Player Two's name:")
             if(player2.name == null){ player2.name = 'Player Two'}
        currentMove.textContent = player1.name +"'s Move!"
    };
   
    //Initial Game Values
    let activePlayer = player1;
    let winner = null;
    currentMove.textContent = activePlayer.name + "'s Move!";

    //Switches active player 
    const switchPlayer = () => {
        if(activePlayer == player1){
            activePlayer = player2;
            currentMove.textContent = activePlayer.name + "'s Move!";
            console.log(activePlayer)
        }else{
            activePlayer = player1;
            currentMove.textContent = activePlayer.name + "'s Move!";
            console.log(activePlayer)
        }
    }

    //checks for a winner or a cats game
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
          
        })
        if(arr.includes('') == false){
            setTimeout(() =>{currentMove.textContent = 'TIE GAME!'},10)

        }
    }
    
    //Resets the game
    const reset = () =>{
        arr.forEach((element, index) =>{
            arr[index] = "";
        })
        const squareReset = document.querySelectorAll('.square')
            squareReset.forEach((element, index) =>{
                element.textContent = '';
            })

        activePlayer = player1;
        currentMove.textContent = activePlayer.name + "'s Move!";
        winner = null;
    }
    //return
    return{
        reset,
        changeName
    }

})();
