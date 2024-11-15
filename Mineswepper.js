// select elements
const game = document.getElementById('game-board');

// game settings
const gridRows = 10; // 10x10 grid
const gridCols = 10;

// function to initialize the game grid (just printing the grid)
function initializeGame() 
{
  game.innerHTML = '';  // clear the game board

  // set the grid template for the CSS grid layout - can be altered later if needed for dynamic game board size
  game.style.gridTemplateColumns = `repeat(${gridCols}, 39px)`; 
  game.style.gridTemplateRows = `repeat(${gridRows}, 39px)`;

  // create the grid cells in the DOM using nested for loops 
  for (let row = 0; row < gridRows; row++) 
  {
    for (let col = 0; col < gridCols; col++) 
    {
      const cell = document.createElement('div');
      cell.classList.add('cell');  // add the CSS class for styling
      cell.dataset.row = row;
      console.log(row); // testing log statement can be removed 
      cell.dataset.col = col;
      console.log(col); // testing log statement can be removed 
      game.appendChild(cell);
    }
    
  }

}

// call initializegame to create the grid
initializeGame();



