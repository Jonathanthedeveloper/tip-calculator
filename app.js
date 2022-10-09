("strict");
const bill = document.querySelector(".bill-input");
const tipPercents = document.querySelectorAll(".tip-percent-choice");
const customTipPercent = document.querySelector(".custom-percent-choice");
const tipDisplay = document.querySelector(".tip-amt");
const totalTipDisplay = document.querySelector(".total-tip");
const numPeople = document.querySelector(".num-people");
const reset = document.querySelector(".reset");
let tip,
  totalTip = 0,
  percent,
  person,
  billValue,
  calcTime;

bill.addEventListener("keyup", () => {
  billValue = bill.value;
  if (!isNaN(percent) && !isNaN(person) && !isNaN(billValue) && percent != 0 && person != 0 && billValue != 0) {
    clearTimeout(calcTime);
    calcTime = setTimeout(calcTip, 1500);
  }
});

tipPercents.forEach((tipPercent) => {
  tipPercent.addEventListener("click", function () {
    percent = Number(tipPercent.textContent.replace("%", "")) / 100;
    if (!isNaN(percent) && !isNaN(person) && !isNaN(billValue) && percent != 0 && person != 0 && billValue != 0) {
      calcTip(); 
    }
  });
});

customTipPercent.addEventListener("keyup", function () {
  percent = customTipPercent.value / 100;
  if (!isNaN(percent) && !isNaN(person) && !isNaN(billValue) && percent != 0 && person != 0 && billValue != 0) {
    clearTimeout(calcTime);
    calcTime =  setTimeout(calcTip, 1500);
  }
});

numPeople.addEventListener("keyup", () => {
  person = numPeople.value;
  if (!isNaN(percent) && !isNaN(person) && !isNaN(billValue) && percent != 0 && person != 0 && billValue != 0) {
    clearTimeout(calcTime);
     calcTime =  setTimeout(calcTip, 1500);
  }
});

// this calculates the tip
function calcTip() {
  person = numPeople.value;
  let calculatedTip = Number(bill.value) * percent / person;
  if (!isNaN(calculatedTip) && calculatedTip != Infinity) {
    tip = calculatedTip;

      totalTip+=tip;
    
    //Display the tip and total tip to the user
    tipDisplay.textContent = `$${tip.toFixed(2)}`;
    totalTipDisplay.textContent = `$${totalTip.toFixed(2)}`;
  } else {
    console.log(`TIP: ${tip}, TOTAL_TIP :${totalTip} `);
  }
}

//RESET
reset.addEventListener("click", () => {
  tip = 0;
  bill.value = '';
  numPeople.value = '';
  customTipPercent.value = '';
  tipDisplay.textContent = "$0.00";
});
