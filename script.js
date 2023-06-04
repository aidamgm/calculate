const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const mathOperators = ["%", "*", "/", "-", "+", "="];
let result = "";

//сама функция калькулятора
const calculate = (btnValue) => {
  if (btnValue === "=" && result !== "") {
    result = eval(result);
  } else if (btnValue === "AC") {
    result = "";
  } else if (btnValue === "DEL") {
    result = result.toString().slice(0, -1);
  } else {
    result += btnValue;
  }
  display.value = result;
};

//вешаем слушаетель на каждую кнопку по клику
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});


