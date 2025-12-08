let display = document.querySelector("p");

//function to insert inner text in display
function getValue(value) {
  display.innerText += value;
}

//fuction to display final Answer
function result() {
  try {
    let result = eval(display.innerText);
    display.innerText = "Ans: " + result;
  } catch (e) {
    display.innerText = "Error";
  }
}

// function to delete display inner text
let clearDisplay = () => (display.innerText = "");

//function delete inner text char by char
function clearChar() {
  let disUpdated = display.innerText.slice(0, -1);
  display.innerText = disUpdated;
}

//function to off calculator
function offCal() {
  let btnValue = document.querySelector("#btnValue");
  let onCal = document.querySelector(".onCal");
  btnValue.style.display = "none";
  onCal.style.display = "";
  display.innerText = "";
   let span = document.querySelector("span");
   span.style.display = "none";
}

//function to on calculator
let turnOn = () => {
  let onCal = document.querySelector(".onCal");

  btnValue.style.display = "";
  onCal.style.display = "none";

   let span = document.querySelector("span");
   span.style.display = "";

};

//function to toggle dark mode

let toggle = false;
let darkmodebtn = document.querySelector(".darkmode");

darkmodebtn.addEventListener("click", () => {
  if (!toggle) {
    let body = document.querySelector("body");
    let cont = document.querySelector(".cont");
    body.style.backgroundColor = "black";
    cont.style.boxShadow = "0px 0px 10px 5px #ffffff26";

    let display = document.querySelector(".display");
    display.style.backgroundColor = "#ffffff22";

    let ContBtn = document.querySelectorAll(".allbtn button");
    for (btns of ContBtn) {
      btns.style.backgroundColor = "#ffffff4b";
    }

    //to change toggle btn bg color
    let upperbtn = document.querySelectorAll(" .top_control button");

    for (btnss of upperbtn) {
      btnss.style.backgroundColor = "#38383cd2";
    }

    let span = document.querySelector("span");
    span.style.color = "white";
    toggle = true;
  } else {
    let body = document.querySelector("body");
    let cont = document.querySelector(".cont");
    body.style.backgroundColor = "";
    cont.style.boxShadow = "";

    let display = document.querySelector(".display");
    display.style.backgroundColor = "";

    let ContBtn = document.querySelectorAll(".allbtn button");
    for (btns of ContBtn) {
      btns.style.backgroundColor = "";
    }

    let upperbtn = document.querySelectorAll(" .top_control button");

    for (btnss of upperbtn) {
      btnss.style.backgroundColor = "";
    }

    let span = document.querySelector("span");
    span.style.color = "";

    toggle = false;
  }
});
