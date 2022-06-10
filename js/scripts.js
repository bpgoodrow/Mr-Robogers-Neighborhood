// business logic

let arrayInputNumbers = []
function beepBoop(numberInput) {
  for (let i = 0; i <= numberInput; i+=1)
    newInput = numberInput.toString();
    if(newInput.includes(1)) {
      arrayInputNumbers.push("Beep!")
    } if(newInput.includes(2)) {
      arrayInputNumbers.push("Boop!")
    } if (newInput.includes(3)) {
      arrayInputNumbers.push("Won't you be my neighbor?")
    }
  return arrayInputNumbers;
}


// UI logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    $("form#numberInput").trigger("reset");
    $("#returnInput").hide();
    const returnedNumbers = arrayInputNumbers;

  })
})