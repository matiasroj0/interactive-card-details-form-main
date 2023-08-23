const cardNumbers = document.querySelector(".card-numbers");
const cardName = document.querySelector(".card-name");
const cardMonth = document.querySelector(".card-month");
const cardYear = document.querySelector(".card-year");
const cardCVC = document.querySelector(".card-cvc");

const inputNumbers = document.querySelector(".input-numbers");
const inputName = document.querySelector(".input-name");
const inputMonth = document.querySelector(".input-month");
const inputYear = document.querySelector(".input-year");
const inputCVC = document.querySelector(".input-cvc");

const nameError = document.querySelector(".card-name-error");
const numberError = document.querySelector(".card-number-error");
const dateError = document.querySelector(".card-date-error");
const cvcError = document.querySelector(".card-cvc-error");

const confirmBtn = document.querySelector(".confirm-btn");
const continueBtn = document.querySelector(".continue-btn");

const completedState = document.querySelector(".completed-state");
const cardInputSection = document.querySelector(".card-inputs");

inputNumbers.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardNumbers.innerText = "0000 0000 0000 0000";
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ", "");

        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumbers.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumbers.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumbers.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {
            cardNumbers.innerHTML = valuesOfInput
        }
    }
})

inputName.addEventListener("keyup", (e) => {
    if(!e.target.value) {
        cardName.innerHTML = "JANE APPLESEED";
    } else {
        cardName.innerHTML = e.target.value;
    }
})

inputMonth.addEventListener("keyup", (e) => {
    if(!e.target.value) {
        cardMonth.innerHTML = "00";
    } else {
       cardMonth.innerHTML = inputMonth.value + "/";
    }
})

inputYear.addEventListener("keyup", (e) => {
    if(!e.target.value) {
        cardYear.innerHTML = "00";
    } else {
        cardYear.innerHTML = inputYear.value;
    }
})

inputCVC.addEventListener("keyup", (e) => {
    if(!e.target.value) {
        cardCVC.innerHTML = "000";
    } else {
        cardCVC.innerHTML = inputCVC.value;
    }
})

confirmBtn.addEventListener("click", () => {
    checkNumber();
    checkName();
    checkMonth();
    checkYear();
    checkDate();
    checkCVC();
    if (checkNumber() && checkName() && checkDate()) {
        completedState.classList.remove("hidden");
        cardInputSection.classList.add("hidden");
    }
})

continueBtn.addEventListener("click", () => {
    window.location.reload();
})

function checkName() {
    if(inputName.value == ""){
        nameError.classList.remove("hidden");
        inputName.classList.add("error-border");
        nameError.innerText = "Can't be blank";
        return false;
    } else {
        nameError.classList.add("hidden");
        inputName.classList.remove("error-border");
        return true;
    }
}

function containsLetter(str) {
  return /[a-z]/i.test(str);
}

function checkNumber() {
    let cardNumStr = inputNumbers.value;
    
    if(containsLetter(cardNumStr)){
        numberError.classList.remove("hidden");
        inputNumbers.classList.add("error-border");
        numberError.innerText = "Wrong format, numbers only";
        return false;        
    } else if (inputNumbers.value == ""){
        numberError.classList.remove("hidden");
        inputNumbers.classList.add("error-border");
        numberError.innerText = "Can't be blank";        
        return false;
    } else if (inputNumbers.value.length < 19 || inputNumbers.value.length > 19) {
        numberError.classList.remove("hidden");
        inputNumbers.classList.add("error-border");
        numberError.innerText = "You must enter all the numbers"; 
        return false;
    } else {
        numberError.classList.add("hidden");
        inputNumbers.classList.remove("error-border");
        return true;
    }
}

function checkDate() {
    if(checkMonth() && checkYear()) {
        dateError.classList.add("hidden");
        return true;
    } else {
        return false;
    }
}

function checkMonth() {
    if(inputMonth.value == "") {
        dateError.classList.remove("hidden");
        inputMonth.classList.add("error-border");
        dateError.innerText = "Can't be blank";
        return false;
    } else if(inputMonth.value > 12 || inputMonth.value < 1) {
        dateError.classList.remove("hidden");
        inputMonth.classList.add("error-border");
        dateError.innerText = "Enter valid date";
        return false;
    } else {
        inputMonth.classList.remove("error-border");
        dateError.classList.add("hidden");
        return true;
    }
}

function checkYear() {
    if (inputYear.value == "") {
        dateError.classList.remove("hidden");
        inputYear.classList.add("error-border");
        dateError.innerText = "Can't be blank";    
        return false;
    } else if(inputYear.value < 23) {
        dateError.classList.remove("hidden");
        inputYear.classList.add("error-border");
        dateError.innerText = "Enter valid date";
        return false;
    } else {
        inputYear.classList.remove("error-border");
        return true;
    }
}

function checkCVC() {
    if (inputCVC.value == "") {
        cvcError.classList.remove("hidden");
        inputCVC.classList.add("error-border");
        cvcError.innerText = "Can't be blank";    
        return false;
    } else {
        cvcError.classList.add("hidden");
        inputCVC.classList.remove("error-border");
        return true;
    }
}

