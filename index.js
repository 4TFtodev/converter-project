let inputEl = document.getElementById("inputEl");
let convertBtn = document.getElementById("convertBtn");
let lengthResult = document.getElementById("lengthResult");
let volumeResult = document.getElementById("volumeResult");
let massResult = document.getElementById("massResult");

let errorMessage = document.getElementById("error-message");

convertBtn.addEventListener('click', function() {
    inputEl.textContent = "";
    let inputValue = Number(inputEl.value);
    if (isNaN(inputValue)) {
        errorMessage.textContent = "Entrer un numéro valide ou un nombre décimal.";
    } else {
        errorMessage.textContent = "";
        lengthResult.textContent = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet`;
        volumeResult.textContent = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons`;
        massResult.textContent = `${inputValue} kilograms = ${(inputValue * 2.205).toFixed(3)} pounds`;
    }
})