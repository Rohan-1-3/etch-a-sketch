
var selectAge = document.getElementById("selectAge");
for (let i = 1; i <= 100; i++)
  selectAge.innerHTML += "<option>" + i + "</option>";
var selectAge = document.getElementById("selectAge");
var contents;

for (let i = 0; i <= 100; i++) {
  contents += "<option>" + i + "</option>";
}
selectAge.innerHTML = contents;


function gridSize(){
    const gridSize = document.querySelector('select').value;
    // makeRows(gridSize, gridSize);
}

