//GridSize Options
var selectAge = document.getElementById("selectAge");
for (let i = 1; i <= 100; i++)
  selectAge.innerHTML += "<option>" + i + "</option>";
var selectAge = document.getElementById("selectAge");
var contents;

for (let i = 0; i <= 100; i++) {
  contents += "<option>" + i + "</option>";
}
selectAge.innerHTML = contents;

//Making Grids Div
const container = document.getElementById("container");
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(1,1); //Starting 1x1 grid

//GridSize Accr to Users Choice
function gridSize(){
    const gridSizeRow = document.querySelector('select').value;
    const gridSizeColumn = document.querySelector('select').value;
    makeRows(gridSizeRow, gridSizeColumn);
}


