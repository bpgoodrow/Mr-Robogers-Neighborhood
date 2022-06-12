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
      arrayInputNumbers.push("Beep!")
    } else {
      arrayInputNumbers.push(i)
    }
  }
  return arrayInputNumbers;
}

// UI logic
$(document).ready(function () {

  // Register Event Handler
  $("#numberInput").submit(function (event) {
    event.preventDefault();
    const userNumber = $("#userNumber").val();
    const words = beepBoop($("#userNumber").val());
    $("#returnInput").html("<p>" + words + "</p>");
    return;
  });
});