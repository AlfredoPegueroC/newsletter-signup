const btn = document.querySelector("#btn");
const inputEmail = document.querySelector("#email_input");

const emailAddress = document.querySelector("#email_address");

const label = document.querySelector("#label");

const leftSide = document.querySelector(".left_side");
const rightSide = document.querySelector(".right_side");
const successCard = document.querySelector(".thanks_card");

const maxLengthInput = () => {
  if (inputEmail.length > inputEmail.maxlength) {
    inputEmail.value = inputEmail.value.slice(0, inputEmail.maxlength);
  }
};

const validationInput = (input) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailRegex.test(input.value)) {
    leftSide.style.display = "none";
    rightSide.style.display = "none";
    successCard.style.display = "block";
    emailAddress.innerHTML = inputEmail.value;
  } else {
    inputEmail.classList.add("error");
    label.classList.add("error-format");
  }
};

inputEmail.addEventListener("focus", (e) => {
  e.preventDefault();
  if (inputEmail.classList.contains("error")) {
    inputEmail.classList.remove("error");
    label.classList.remove("error-empty");
    label.classList.remove("error-format");
  }
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputEmail.value !== "") {
    validationInput(inputEmail);
  } else if (inputEmail.value === "") {
    inputEmail.classList.add("error");
    label.classList.add("error-empty");
  }
});

maxLengthInput();
