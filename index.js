let board = document.getElementById("game-board");
let generateBtn = document.getElementById("gen-btn");

console.log(board);
console.log(generateBtn);

function generateBoard() {
    board.innerHTML="";
    let rows = Math.random()*10;
    let cols = Math.random()*20;
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        tr.setAttribute("class", "row");
        for(let j = 0 ; j < cols ; j++){
            let td = document.createElement("td");
            td.setAttribute("class","cell");
            tr.appendChild(td);
        }
        board.appendChild(tr);
    }
}

function colorCell(board){
    const color = document.querySelector("#color-picker").value;
    board.target.style.backgroundColor= color; 
}
board.addEventListener("click", colorCell,false);

generateBtn.addEventListener("click", ()=>{
    generateBoard();
});



