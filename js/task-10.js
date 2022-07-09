function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const [input, createBtn, destroyBtn] = document.querySelector('#controls').children
const boxDiv = document.querySelector("#boxes")



function onCreatrBtn () {
  const newArray = []
  for (let i = 1; i <= +input.value; i ++) {
    const newBox = document.createElement("div");
    newBox.style.height = newBox.style.width = `${30 + i * 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newArray.push(newBox)
  }
  boxDiv.append(...newArray)
}

function ondestroyBtn () {
  boxDiv.innerHTML = ""
  input.value = ""
}

destroyBtn.addEventListener("click", ondestroyBtn)
createBtn.addEventListener("click", onCreatrBtn)