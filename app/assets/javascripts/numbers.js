var nextNumber = 1;
var lastNumber = 10;
function clickNumber(number) {
  if (number === nextNumber) {
    checkIfWinner();
    nextNumber++;
  } else {
    nextNumber = 1;
  }
}


function checkIfWinner() {
  if (nextNumber === lastNumber) {
    alert("You clicked every box in order!");
  }  
}