import DonutMaker from './DonutMaker.js';

const MakeDonut = document.getElementById("makeDonut");
const DonutCount = document.getElementById("donutCount");
const BuyAutoClicker = document.getElementById("buyAutoClicker");
const AutoClickerCount = document.getElementById("autoClickerCount");
const AutoClickerCost = document.getElementById("autoClickerCost");
const MultiplierCount = document.getElementById("multiplierCount");
const MultiplierCost = document.getElementById("multiplierCost");
const BuyDonutMultiplier = document.getElementById("buyDonutMultiplier");
const CurrentClickValue = document.getElementById("currentClickValue");
const ResetButton = document.getElementById("resetButton")
const AboutGameButton = document.getElementById("aboutGameButton");
const AboutCreatorButton = document.getElementById("aboutCreatorButton");
let isShowing = false;
let dm = new DonutMaker();

function showDisplay() {
  DonutCount.value = dm.getDonutCount()
  AutoClickerCount.value = dm.getAutoClickerCount();
  AutoClickerCost.value = dm.getAutoClickerCost();
  MultiplierCount.value = dm.getDonutMultiplierCount();
  MultiplierCost.value = dm.getDonutMultiplierCost();
  CurrentClickValue.value = dm.getClickValue();
};

function setButton() {

}
showDisplay();

MakeDonut.addEventListener("click", () => {
  dm.makeDonut();
  showDisplay();
}); 

BuyAutoClicker.addEventListener("click", () => {
    dm.purchaseAutoClicker();

    let clickRate = dm.getAutoClickerRate();
    let timeInSec = 1000/clickRate;
    let autoClicking = setInterval(donutClickFactory, timeInSec);
    function donutClickFactory() {
      if( clickRate > 0) {
        dm.makeDonut();
        dm.getAutoClickerCost()
        showDisplay();
      } 
    }
    dm.autoClickerHandles.push(autoClicking)
  
  
 
});

BuyDonutMultiplier.addEventListener("click", () => {
  dm.purchaseDonutMultiplier();
  showDisplay();
})


AboutGameButton.addEventListener("click", (ev) => {
    const modal = document.getElementById("aboutGameModal")
    if (!isShowing) {
      console.log("if ",isShowing)
      modal.style.display = 'block'
      isShowing = true;
    } else {
      console.log("else ",isShowing)
      modal.style.display = 'none'
      isShowing = false;
    }
});

AboutCreatorButton.addEventListener("click", (ev) => {
    const modal = document.getElementById("aboutCreatorModal")
    if (!isShowing) {
      console.log("if ",isShowing)
      modal.style.display = 'block'
      isShowing = true;
    } else {
      console.log("else ",isShowing)
      modal.style.display = 'none'
      isShowing = false;
    }
});



ResetButton.addEventListener("click", () => {
  dm.killAutoClickers();
  dm = new DonutMaker();
  showDisplay();
});




