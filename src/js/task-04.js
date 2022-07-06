
// 1) Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// 2) Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// 3) Обновляй интерфейс новым значением переменной counterValue.


const increment = document.querySelector("[data-action ='increment']");
const decrement = document.querySelector("[data-action='decrement']");
const totalValue = document.querySelector("#value") 

let counterValue = 0;
const inc = () => {
    counterValue += 1;

    totalValue.textContent = counterValue
};

const dec = () => {
    counterValue -= 1;

    totalValue.textContent = counterValue
};

decrement.addEventListener("click",dec)
increment.addEventListener("click",inc)