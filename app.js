import DonutMaker from './DonutMaker.js';

const MakeDonut = document.getElementById("makeDonut");
const DonutCount = document.getElementById("donutCount");
const BuyAutoClicker = document.getElementById("buyAutoClicker");
const AutoClickerCount = document.getElementById("autoClickerCount");
const AutoClickerCost = document.getElementById("autoClickerCost");

// may want to change this name 
let dm = new DonutMaker();
function showDisplay() {
  DonutCount.value = dm.getDonutCount()
  AutoClickerCount.value = dm.getAutoClickerCount();
  AutoClickerCost.value = dm.getAutoClickerCost();
};

showDisplay();

MakeDonut.addEventListener("click", () => {
  dm.makeDonut();
  showDisplay();
}); 

BuyAutoClicker.addEventListener("click", () => {
  console.log("Buying auto clicker");
  dm.buyAutoClicker();

  let clickRate = dm.getAutoClickerRate();
  let timeInSec = 1000/clickRate;
  let autoClicking = setInterval(donutClickFactory, timeInSec);

  function donutClickFactory() {
    console.log("auto click")
    if( clickRate >= 0) {
      console.log("click rate")
      showDisplay();
    } else {
      ("maybe autoclick")
      dm.makeDonut();
      showDisplay();
    }
  }

});





