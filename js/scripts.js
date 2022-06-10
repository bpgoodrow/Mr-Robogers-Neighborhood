// business logic

let arrayInputNumbers = []
function beepBoop(numberInput) {
arrayInputNumbers = numberInput
for (let i = 0; i <= numberInput; i+=1)
console.log(i)
}
arrayInputNumbers


// UI logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    $("form#numberInput").trigger("reset");
    $("#returnInput").hide();
  })
})