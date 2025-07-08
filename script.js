

let count = 0;
function onBtnClik(button) {


  if (button.textContent == "") {

    if (count == 0) {
      button.textContent = "X";
      count = 1;

    } else {
      button.textContent = "O";
      count = 0;
    }

    checkWinner();
  }




}

function checkWinner() {

  let b1 = document.querySelector("#btn1").textContent.toString();
  let b2 = document.querySelector("#btn2").textContent.toString();
  let b3 = document.querySelector("#btn3").textContent.toString();
  let b4 = document.querySelector("#btn4").textContent.toString();
  let b5 = document.querySelector("#btn5").textContent.toString();
  let b6 = document.querySelector("#btn6").textContent.toString();
  let b7 = document.querySelector("#btn7").textContent.toString();
  let b8 = document.querySelector("#btn8").textContent.toString();
  let b9 = document.querySelector("#btn9").textContent.toString();

  if (b1 === b2 && b2 === b3 && b1 !== "") {
    alert(`${b1} is won`);
    restartGame();
    return;

  }
  else if (b4 === b5 && b5 === b6 && b4 !== "") {
    alert(`${b4} is won`);
    restartGame();
    return;

  }
  else if (b7 === b8 && b8 === b9 && b7 !== "") {
    alert(`${b7} is won`);
    restartGame();
    return;
  }

  else if (b1 === b4 && b4 === b7 && b1 !== "") {
    alert(`${b1} is won`);
    restartGame();
    return;
  }
  else if (b2 === b5 && b5 === b8 && b2 !== "") {
    alert(`${b2} is won`);
    restartGame();
    return;
  }
  else if (b3 === b6 && b6 === b9 && b3 !== "") {
    alert(`${b3} is won`);
    restartGame();
    return;
  }

  else if (b1 === b5 && b5 === b9 && b1 !== "") {
    alert(`${b1} is won`);
    restartGame();
    return;
  }
  else if (b3 === b5 && b5 === b7 && b3 !== "") {
    alert(`${b3} is won`);
    restartGame();
    return;
  }

  else if (b1 !== "" && b2 !== "" && b3 !== "" && b4 !== "" && b5 !== "" && b6 !== "" && b7 !== "" && b8 !== "" && b9 !== "") {
    alert("game is tie!!");
    restartGame();
    return;
  }
}

function restartGame() {
  let b1 = document.querySelector("#btn1").textContent = "";
  let b2 = document.querySelector("#btn2").textContent = "";
  let b3 = document.querySelector("#btn3").textContent = "";
  let b4 = document.querySelector("#btn4").textContent = "";
  let b5 = document.querySelector("#btn5").textContent = "";
  let b6 = document.querySelector("#btn6").textContent = "";
  let b7 = document.querySelector("#btn7").textContent = "";
  let b8 = document.querySelector("#btn8").textContent = "";
  let b9 = document.querySelector("#btn9").textContent = "";
}


















