// business logic

let arrayInputNumbers = []
function beepBoop(numberInput) {
  for (let i = 0; i <= numberInput; i+=1)
  console.log(i)
    const newInput = numberInput.toString();
    if(newInput.includes(1)) {
      arrayInputNumbers.push("Beep!")
    } if(newInput.includes(2)) {
      arrayInputNumbers.push("Boop!")
    }
  return arrayInputNumbers;
}


// UI logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    $("form#numberInput").trigger("reset");
    $("#returnInput").hide();
  })
})