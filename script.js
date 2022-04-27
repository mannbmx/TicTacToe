
const gameBoard = (()=>{

//Creates game board array and adds 9 items
let arr = [];    
for(let i=0; i<9; i++){
    arr.push('');
}
//Selects game boards container
const gameBoardCont = document.querySelector('#gameBoardCont');

//Creates a div in each array item
arr.forEach(()=>{
    const square = document.createElement('div');
    square.classList = 'square';
    square.textContent = 'X'
    gameBoardCont.appendChild(square);

    //Adds event listener to each div

    

    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor = 'blue';
    })

    square.addEventListener('mouseleave', ()=>{
        square.style.backgroundColor =  'white';
    })



})

})();

const playerFactory = name => {
    name;

    return{
        name: name
    }
}

const player1 = playerFactory('Zephin');
console.log(player.name)