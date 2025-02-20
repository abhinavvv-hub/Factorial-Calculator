document.addEventListener("DOMContentLoaded", function () {
    let inputField = document.getElementById("numberInput");
    let resultDisplay = document.getElementById("result");
    let button = document.getElementById("calculateBtn");
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    function animateResult(finalValue) {
        let count = 0;
        let fonts = ["Arial", "Verdana", "Courier", "Georgia", "Times New Roman", "Comic Sans MS"];
        let index = 0;
        resultDisplay.textContent = "Calculating...";
        resultDisplay.style.fontFamily = fonts[index];

        let fontInterval = setInterval(() => {
            index = (index + 1) % fonts.length;
            resultDisplay.style.fontFamily = fonts[index];
        }, 100);

        setTimeout(() => {
            clearInterval(fontInterval);
            let interval = setInterval(() => {
                resultDisplay.textContent = count;
                if (count >= finalValue) {
                    clearInterval(interval);
                    resultDisplay.textContent = finalValue;
                }
                count += Math.ceil(finalValue / 30); 
            }, 20);
        }, 2400); 
    }
    function handleCalculation() {
        let num = parseInt(inputField.value);
        if (!isNaN(num) && num >= 0) {
            let fact = factorial(num);
            animateResult(fact);
        } else {
            resultDisplay.textContent = "Enter a valid number";
        }
    }
    button.addEventListener("click", handleCalculation);
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            handleCalculation();
        }
    });
});
