var boxesClicked = [];
function clickBox(number) {
  if (boxesClicked.indexOf(number) === -1) {
    boxesClicked.push(number);
  }
  if (boxesClicked.length === 3) {
    alert("You clicked EVERY Box!");
  }
  console.log(boxesClicked);
}