
const input = document.querySelector("#font-size-control");
//console.log(input)
const text = document.querySelector("#text");
//console.log(text)

 input.oninput = function () {
    text.style.fontSize = input.value + "px"
}; 
 