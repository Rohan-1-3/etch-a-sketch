/* eslint-disable no-param-reassign */
// GridSize Options
const container = document.getElementById("container");
const defaultButton = document.querySelector(".default");
const rainbowButton = document.querySelector(".rainbow");
const eraserButton = document.querySelector(".eraser");
const resetButton = document.querySelector(".reset");
const colorPicker = document.querySelector("#color-picker");

// Making Grids Div
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < (rows * cols); c+=1) {
    const cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item"
  };
};

// draw when user keeps the button clicked and moves
let isDragging = false;
container.addEventListener("mousedown", ()=>{
  isDragging = true;
});
container.addEventListener("mouseup", ()=>{
  isDragging = false;
});

// Grid Change color to black
function colorChange(){
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem)=>{
    gridItem.addEventListener("mouseover", ()=>{
      if(isDragging){
        gridItem.style.backgroundColor = "black";
      }
      
    })
  })
}

// GridSize Accr to Users Choice
function gridSize(size){
  document.getElementById("container").textContent = "";// removes previous grid size
  makeRows(size, size);
  colorChange();
}

// slider input for changing size
const slider = document.getElementById("myRange");
const output = document.getElementById("size");
slider.oninput = function input(){
  output.textContent = `${this.value} X ${this.value}`
  gridSize(this.value);
}

// Adding Eraser
function eraser(){
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem)=>{
    gridItem.addEventListener("mouseover", ()=>{
      if(isDragging) gridItem.style.backgroundColor = "";
    })
  })
}

function colorPickedUser(){
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((gridItem)=>{
    gridItem.addEventListener("mouseover", ()=>{
      if(isDragging) gridItem.style.backgroundColor = colorPicker.value;
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
      if(isDragging){
      const rgbValue1= rgbRandom();
      const rgbValue2 = rgbRandom();
      const rgbValue3 = rgbRandom();
      const finalRGB = `rgb(${rgbValue1},${rgbValue2},${rgbValue3})`// gets randome rgb value
      gridItem.style.backgroundColor = finalRGB;
      }
    })
  })

}

// Remove the sketch in current grid
function resetGrid(){
  gridSize(8);
  colorPicker.value = "black";
}

gridSize(8);
colorChange();

defaultButton.addEventListener("click", ()=>{
  colorPicker.value = "black";
  colorChange();
});
rainbowButton.addEventListener("click", rainbowColorChange);
eraserButton.addEventListener("click", eraser);
resetButton.addEventListener("click", resetGrid);
colorPicker.addEventListener("click", colorPickedUser);

