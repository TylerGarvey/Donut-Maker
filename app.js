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
const AboutGame = document.getElementById("aboutGame");
const AboutCreator = document.getElementById("aboutCreator");
const ResetButton = document.getElementById("resetButton")
const AboutGameButton = document.getElementById("aboutGameButton");
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

function getAboutGame() {
  return `
    <div class="expand-fred">
      <p>Fred the Baker was a popular advertising character portrayed by actor Michael Vale in commercials for Dunkin' Donuts from 1981 to 1997. Michael Vale died on December 24, 2005 in New York City of complications from diabetes. He was 83 years old.</p>
    </div>
    <div class="expand-inspiration">
      <p>Donut Maker draws heavily from 
        <a href="https://orteil.dashnet.org/cookieclicker/" target="_blank">
          COOKIE CLICKER!
        </a>
      </p>
    </div>
  `
}

function getAboutGameButton() {
return `
    <div class="dropdown">
      <button id="aboutGame">About The Game</button>
    </div>
`
};

function getAboutCreator() {
  return `
  <div class="about-creator-content-container">
   <div class="expand-contact">
     <ul class="contact-info-list">
       <li>Tyler.Garvey614@gmail.com</li>
       <li>937-422-7859</li>
      </ul>
    </div>
  </div>
  `
}

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

AboutCreator.addEventListener("click", () => {
  AboutCreator.innerhtml = getAboutCreator();
});

ResetButton.addEventListener("click", () => {
  dm.killAutoClickers();
  dm = new DonutMaker();
  showDisplay();
});
// let playSound = () => new Audio("src").play()
// <button onclick="playSound()">Play</button>




