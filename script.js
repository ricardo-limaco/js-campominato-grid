const selectDifficolta = document.getElementById("select-difficolta");
const btnStart = document.getElementById("btn-start");
const boxContainer = document.getElementById("box-container");

btnStart.addEventListener("click", function () {
  // utente sceglie il livello
  const level = selectDifficolta.value;

  // numero celle da creare
  const totCell = getCellNum(level);

  generateGrid(totCell);

  console.log("l'utente ha scelto il livello", level);
  console.log(`dovranno essere create ${totCell} celle.`);
});






// Fuction che dal Livello sceglie il numero di celle
function getCellNum(level) {
  let risultato;

  switch (parseInt(level)) {
    case 1:
      risultato = 100;
      break;

    case 2:
      risultato = 81;
      break;

    case 3:
      risultato = 49;
      break;

  }
  return risultato;
};


// Function che crea la griglia
function generateGrid(cellsNumber) {
  // resetto box container
  boxContainer.innerHTML = "";
  
  // calcolo per avere la dimensione delle celle
  const perRowCells = Math.sqrt(cellsNumber);
  const cellSize = 100 / perRowCells;

  // Ciclo in base al numero di celle
  for (let i = 1; i <= cellsNumber; i++) {

    // Genera singola cella
    const cell = document.createElement("div");
    cell.classList.add("box", "d-flex", "justify-content-center", "align-items-center");
    cell.style.width = cellSize + "%";
    cell.style.height = cellSize + "%";
    cell.addEventListener("click", onSingleCellClick);

    // Genera numero cella
    const textNumber = document.createElement("p");
    textNumber.textContent = i;

    // Aggiungo la cella e numero al DOM
    cell.append(textNumber);
    boxContainer.append(cell);
  }

};



// Function per colorare cella al click
function onSingleCellClick() {
  // cella cliccata
  this.classList.toggle("_click-blue");
};