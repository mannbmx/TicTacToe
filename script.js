
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
        square.style.backgroundColor = activePlayer.mark;
        arr[index] = activePlayer.mark;
        switchPlayer();
    })

    // square.addEventListener('mouseover', ()=>{
    //     square.style.backgroundColor = 'blue';
    // });

    // square.addEventListener('mouseleave', ()=>{
    //     square.style.backgroundColor =  'white';
    // });




})

    //Creates Players
    const player1 = playerFactory('Player 1', 'red');
    const player2 = playerFactory('Player 2', 'green');

   

    let activePlayer = player1;
    

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
    
 
    return{
        activePlayer,
        switchPlayer,
        arr
    }




})();
