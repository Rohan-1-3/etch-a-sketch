//GridSize Options
var selectGridSize = document.getElementById("selectGridSize");
for (let i = 64; i >= 1; i--){
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
makeRows(64,64)
colorChange();

//GridSize Accr to Users Choice
function gridSize(){
  document.getElementById('container').textContent = '';//removes previous grid size
  const gridSize = document.querySelector('select').value;
  makeRows(gridSize, gridSize);
  colorChange();
}

//Grid Change color to black
function colorChange(){
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem)=>{
    gridItem.addEventListener('mouseover', ()=>{
      gridItem.style.backgroundColor = 'black';
    })
  })
}

//Adding Eraser
function eraser(){
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem)=>{
    gridItem.addEventListener('mouseover', ()=>{
      gridItem.style.backgroundColor = 'white';
    })
  })
}

//Grid Change into random color
function rainbowColorChange(){
  function rgbRandom(){
    return Math.floor((Math.random()*255)+1);
  }
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem)=>{
    gridItem.addEventListener('mouseover', ()=>{
      const rgbValue1= rgbRandom();
      const rgbValue2 = rgbRandom();
      const rgbValue3 = rgbRandom();
      const finalRGB = `rgb(${rgbValue1},${rgbValue2},${rgbValue3})`//gets randome rgb value
      gridItem.style.backgroundColor = finalRGB;
    })
  })

}

//Remove the sketch in current grid
function resetGrid(){
  gridSize();
}


