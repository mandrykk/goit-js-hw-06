const inputElem = document.querySelector("#validation-input");
const validLength = Number(inputElem.getAttribute("data-length"));

inputElem.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length !== validLength) {
    inputElem.classList.add("invalid");
    inputElem.classList.remove("valid");
  } else {
    inputElem.classList.add("valid");
    inputElem.classList.remove("invalid");
  }
});

