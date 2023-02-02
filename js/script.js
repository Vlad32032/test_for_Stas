// Ноды для первой формы

const checkBoxWrapper = document.querySelector(".checkbox_wrapper");
const checkBox = document.querySelector(".checkbox");
const button = document.querySelector(".button");
const error = document.querySelector(".error");

// Ноды для второй формы

const radioMan = document.querySelector("#radio_man");
const radioWoman = document.querySelector("#radio_woman");
const buttonRadio = document.querySelector(".button_radio");
const errorRadio = document.querySelector(".error_radio");

// Обработчик для первой формы

button.addEventListener("click", () => {
    if (checkBox.checked) {
        checkBoxWrapper.style.border = "";
        error.style.display = "none";
    } else {
        checkBoxWrapper.style.border = "2px solid red";
        error.style.display = "inline-block";
    }
});

// Обработчик для второй формы

buttonRadio.addEventListener("click", () => {
    errorRadio.style.display = "inline-block";
    if(radioMan.checked) {
        errorRadio.innerText = "Мужчинам вход запрещен";
    } else {
        errorRadio.innerText = "Женщинам вход запрещен";
    }
})

