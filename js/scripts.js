// business logic

function beepBoop(numberInput) {
  let arrayInputNumbers = []
  for (let i = 0; i <= numberInput; i++) {
    let newInput = i.toString();
    if (newInput.includes("3")) {
      arrayInputNumbers.push("Won't you be my neighbor?")
    } else if (newInput.includes("2")) {
      arrayInputNumbers.push("Boop!")
    } else if (newInput.includes("1")) {
      console.log("Pushing: Beep!")
      arrayInputNumbers.push("Beep!")
    } else {
      arrayInputNumbers.push(i)
    }
  }
  return arrayInputNumbers;
}

// UI logic
$(document).ready(function () {
  $("form#numberInput").submit(function (event) {
    event.preventDefault();
    const userNumber = $("#userNumber").val();
    $("#returnInput").html(beepBoop(numberInput));
    return beepBoop(numberInput);
  });
});