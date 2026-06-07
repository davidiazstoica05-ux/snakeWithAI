const boxSize = 20;
let snake = [
    { x: 200, y: 200 }, // Índice 0: La cabeza
    { x: 180, y: 200 }, // Índice 1: Un pedazo del cuerpo
    { x: 160, y: 200 }  // Índice 2: La cola
];

let food =
    { x: 100, y: 100 };

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

function drawBoard(boxSize,food,snake, ctx){

ctx.fillStyle = '#9bbc0f'; 
ctx.fillRect(0,0,400,400);
ctx.fillStyle = 'red';
ctx.fillRect(food.x, food.y, boxSize,boxSize); 
ctx.fillStyle = 'black'; 


snake.forEach(cuerpo => {
    
    ctx.fillRect(cuerpo.x,cuerpo.y,boxSize,boxSize);

});

};

drawBoard.

drawBoard.setTimeout(() => {
}, timeout);