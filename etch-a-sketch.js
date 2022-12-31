//GridSize Options
var selectGridSize = document.getElementById("selectGridSize");
for (let i = 1; i <= 64; i++){
  selectGridSize.innerHTML += "<option>" + i + "</option>";
}

//Making Grids Div
const container = document.getElementById("container");
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item"
  };
};
//Initial Grid size
makeRows(16,16)
onHoverColorChange();
//GridSize Accr to Users Choice
function gridSize(){
  document.getElementById('container').textContent = '';//removes previous grid size
  const gridSize = document.querySelector('select').value;
  
  makeRows(gridSize, gridSize);
  onHoverColorChange();
}

function onHoverColorChange(){
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem)=>{
    gridItem.addEventListener('mouseover', ()=>{
      gridItem.className= 'grid-item-onHover';
    })
  })
}


//Divs Change color



