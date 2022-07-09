
let input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");


input.oninput = function() {
    if (input.value.length <= inputLength ) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
    if ( input.value.length > inputLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
    if ( input.value.length === 0 || input.value.trim() === "") {
        input.classList.toggle("invalid")
    }
}