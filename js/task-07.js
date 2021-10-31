const fontControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


fontControl.addEventListener("input", (event) => {
  const textSize = event.currentTarget.value;
  text.style.fontSize = `${textSize}px`;
})