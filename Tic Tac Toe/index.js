let boxButton = document.body.querySelectorAll(".box");
let win = document.body.querySelector(".win");
let newGame = document.querySelector(".new");
let playerX = true;

const COLORS = {
  xColor: "#FF2D75", // Vibrant pink
  oColor: "#00F0FF", // Electric cyan
  xGlow: "0 0 10px #FF2D75, 0 0 20px rgba(255, 45, 117, 0.5)",
  oGlow: "0 0 10px #00F0FF, 0 0 20px rgba(0, 240, 255, 0.5)",
  winGlow: "0 0 15px currentColor, 0 0 30px rgba(255, 215, 0, 0.7)",
  drawColor: "#666"
};

document.querySelector(".heading").style.color = COLORS.oColor;
document.querySelector(".first").style.color = COLORS.xColor;
document.querySelector(".heading").style.textShadow = COLORS.xGlow;
document.querySelector(".first").style.textShadow = COLORS.oGlow;

let disableAll = () => {
  boxButton.forEach(box => {
    box.disabled = true;
  });
};

let winPattern = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]            // diagonals
];

let gameHistory = []; // Array to store all game results

let checkWin = () => {
  for (let pattern of winPattern) {
    let [a, b, c] = pattern;
    let val1 = boxButton[a].innerHTML;
    
    if (val1 && val1 === boxButton[b].innerHTML && val1 === boxButton[c].innerHTML) {
      pattern.forEach(index => {
        boxButton[index].style.boxShadow = COLORS.winGlow;
        boxButton[index].style.transform = "scale(1.05)";
      });
      
      let result = `Player ${val1} Wins!`;
      gameHistory.push(result);
      
      setTimeout(() => {
        document.querySelector(".after").style.display = "flex";
        document.querySelector(".new").style.backgroundColor = val1 === "X" ? COLORS.xColor : COLORS.oColor;
        document.querySelector(".new").style.boxShadow = val1 === "X" ? COLORS.xGlow : COLORS.oGlow;
        
        // Display all results with proper styling
        win.innerHTML = gameHistory.map(result => {
          const isXWin = result.includes("X Wins");
          const color = isXWin ? COLORS.xColor : result.includes("O Wins") ? COLORS.oColor : COLORS.drawColor;
          const shadow = isXWin ? COLORS.xGlow : result.includes("O Wins") ? COLORS.oGlow : `0 0 10px ${COLORS.drawColor}`;
          return `<div style="color: ${color}; text-shadow: ${shadow}">${result}</div>`;
        }).join('');
      }, 1500);
      
      disableAll();
      return true;
    }
  }
  
  // Check for draw
  let isDraw = true;
  boxButton.forEach(box => {
    if (box.innerHTML === "") isDraw = false;
  });
  
  if (isDraw) {
    let result = "Game Draw!";
    gameHistory.push(result);
    
    setTimeout(() => {
      document.querySelector(".after").style.display = "flex";
      document.querySelector(".new").style.backgroundColor = COLORS.drawColor;
      document.querySelector(".new").style.boxShadow = `0 0 10px ${COLORS.drawColor}`;
      
      win.innerHTML = gameHistory.map(result => {
        const isXWin = result.includes("X Wins");
        const color = isXWin ? COLORS.xColor : result.includes("O Wins") ? COLORS.oColor : COLORS.drawColor;
        const shadow = isXWin ? COLORS.xGlow : result.includes("O Wins") ? COLORS.oGlow : `0 0 10px ${COLORS.drawColor}`;
        return `<div style="color: ${color}; text-shadow: ${shadow}">${result}</div>`;
      }).join('');
    }, 1000);
    return true;
  }
  
  return false;
};

let clickFunction = (event) => {
  let box = event.target;
  
  if (playerX) {
    box.innerHTML = "X";
    box.style.color = COLORS.xColor;
    box.style.textShadow = COLORS.xGlow;
  } else {
    box.innerHTML = "O";
    box.style.color = COLORS.oColor;
    box.style.textShadow = COLORS.oGlow;
  }
  
  box.disabled = true;
  playerX = !playerX;
  
  checkWin();
};

boxButton.forEach(box => {
  box.addEventListener('click', clickFunction);
});

newGame.addEventListener('click', () => {
  document.querySelector(".after").style.display = "none";
  playerX = true;
  
  for(let i = 0; i < 9; i++) {
    boxButton[i].innerHTML = "";
    boxButton[i].style.boxShadow = "none";
    boxButton[i].disabled = false;
    boxButton[i].style.color = "";
    boxButton[i].style.textShadow = "none";
    boxButton[i].style.transform = "scale(1)";
    boxButton[i].style.backgroundColor = "";
  }
});

// Clear history button
let clearHistory = document.createElement('button');
clearHistory.textContent = 'Clear History';
clearHistory.style.marginTop = '10px';
clearHistory.style.padding = '5px 10px';
clearHistory.style.borderRadius = '5px';
clearHistory.style.border = 'none';
clearHistory.style.cursor = 'pointer';
clearHistory.style.backgroundColor = COLORS.drawColor;
clearHistory.style.boxShadow = `0 0 5px ${COLORS.drawColor}`;
clearHistory.style.color = 'white';

clearHistory.addEventListener('click', () => {
  gameHistory = [];
  win.innerHTML = '';
});

document.querySelector('.after').appendChild(clearHistory);