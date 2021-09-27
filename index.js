let howManySubmit = document.getElementById("how-many-submit");
let howManyNumbers = null;
let form = document.getElementById("form");
let addButton = document.getElementById("input-add");
let sortButton = document.getElementById("button-sort");
let printPlace = document.getElementById("print-place");
let information = document.getElementById("information");
let addNumber = 0;
const numbers = [];

howManySubmit.addEventListener("click", function number() {
  howManyNumbers = document.getElementById("how-many").value;
  document.getElementById("how-many").value = "";
  document.getElementById(
    "how-many-number"
  ).innerText = `Add your ${howManyNumbers} number here`;
});

addButton.addEventListener("click", function exercises() {
  addNumber++;
  const userNumber = document.getElementById("input-number");
  if (addNumber <= howManyNumbers) {
    numbers.push(userNumber.value);
    userNumber.value = "";
    information.innerHTML = `You added (${addNumber}) number`;
  } else if (howManyNumbers === null) {
    addButton.innerHTML = `Fill first input and click next `;
  } else {
    addButton.innerHTML = `You can't add any more `;
    userNumber.value = "";
  }
});

const sortNumbers = sortButton.addEventListener("click", function sort() {
  if (numbers.length ===0) {
  printPlace.innerHTML = `<h3 id="warning">You didn't add any numbers</h3>`;
    
  }else{
  printPlace.innerHTML = `<h3 id="succeed">${numbers.sort((a, b) => a - b)}</h3>`;
}
});
