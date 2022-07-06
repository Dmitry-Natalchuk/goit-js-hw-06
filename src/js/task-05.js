
const input = document.querySelector("#name-input")
//console.log(input)
const nameOutput = document.querySelector("#name-output")
//console.log(nameOutput)

input.oninput = function() {
    if(input.value === "") {
        nameOutput.innerHTML = "Anonymous"
    } else {
       nameOutput.innerHTML = input.value
    }
};
console.log(input)