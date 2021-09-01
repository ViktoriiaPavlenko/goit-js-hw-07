const inputRef = document.querySelector("#controls input");
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector("#boxes");

const changeOfInput = (el) => {
  inputRef.setAttribute("count", Number(el.currentTarget.value));
};
inputRef.addEventListener("input", changeOfInput);

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + r + "," + g + "," + b + ")";
  return bgColor;
}

let boxSize = 30;
function createBoxes () {
    let boxCount = Number(inputRef.getAttribute("count"));
    
  for (let i = 0; i < boxCount; i += 1) {
    boxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomColor();
    newBox.style.height = boxSize + "px";
    newBox.style.width = boxSize + "px";
    newBox.classList.add("new-box");
    boxesRef.append(newBox);
  }
};
createBtn.addEventListener("click", createBoxes);

function destroyBoxes () {
    const allBoxes = document.querySelectorAll(".new-box");
    
  for (let box of allBoxes) {
    boxesRef.removeChild(box);
    }
    
  boxSize = 30;
};
destroyBtn.addEventListener("click", destroyBoxes);