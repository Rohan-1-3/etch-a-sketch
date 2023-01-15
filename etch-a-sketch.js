// GridSize Options
const selectGridSize = document.getElementById("selectGridSize");
const container = document.getElementById("container");
const defaultButton = document.querySelector(".default");
const rainbowButton = document.querySelector(".rainbow");
const eraserButton = document.querySelector(".eraser");
const resetButton = document.querySelector(".reset")

for (let i = 64; i >= 1; i-=1){
  selectGridSize.innerHTML += `<option>${i}</option>`;
}

// Making Grids Div
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < (rows * cols); c=+1) {
    const cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item"
  };
};

// Grid Change color to black
function colorChange(){
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem)=>{
    gridItem.addEventListener("mouseover", ()=>{
      gridItem.style.backgroundColor = "black";
    })
  })
}

// GridSize Accr to Users Choice
function gridSize(){
  document.getElementById("container").textContent = "";// removes previous grid size
  const gridSize = document.querySelector("select").value;
  makeRows(gridSize, gridSize);
  colorChange();
}

// Adding Eraser
function eraser(){
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem)=>{
    gridItem.addEventListener("mouseover", ()=>{
      gridItem.style.backgroundColor = "white";
    })
  })
}

// Grid Change into random color
function rainbowColorChange(){
  function rgbRandom(){
    return Math.floor((Math.random()*255)+1);
  }
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem)=>{
    gridItem.addEventListener("mouseover", ()=>{
      const rgbValue1= rgbRandom();
      const rgbValue2 = rgbRandom();
      const rgbValue3 = rgbRandom();
      const finalRGB = `rgb(${rgbValue1},${rgbValue2},${rgbValue3})`// gets randome rgb value
      gridItem.style.backgroundColor = finalRGB;
    })
  })

}

// Remove the sketch in current grid
function resetGrid(){
  gridSize();
}
// Initial Grid size
makeRows(64,64)
colorChange();

defaultButton.addEventListener("click", colorChange);
rainbowButton.addEventListener("click", rainbowColorChange);
eraserButton.addEventListener("click", eraser);
resetButton.addEventListener("click", resetGrid);

