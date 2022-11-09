
export default class DonutMaker {
  constructor() {
    this.donutCount = 0;
    this.clickValue = 1;
    this.autoClickerCount = 0;
    this.donutMultiplierCount = 0;
    this.autoClickerCost = 100;
    this.autoClickerRate = 1;
    this.donutMultiplierCost = 10;
    this.autoClickerHandles = [];
  }

  killAutoClickers(){
    for(const h of this.autoClickerHandles){
      clearInterval(h)
    }
  }

  makeDonut() {
    this.donutCount += this.clickValue;
  }
  getClickValue() {
    return this.clickValue;
  }

  getDonutCount() {
    return this.donutCount.toFixed(2);
  }

  getAutoClickerCount() {
    return this.autoClickerCount
  }

  getAutoClickerRate() {
    return this.autoClickerRate++;
  }
  
  getAutoClickerCost() {
    return this.autoClickerCost;
  }

  adjustAutoClickerCost() {
    this.autoClickerCost += Math.round(this.autoClickerCost * 0.1);
  }
  purchaseAutoClicker() {
    if (this.donutCount >= this.autoClickerCost) {
      this.autoClickerCount++;
      this.donutCount -= this.autoClickerCost;
      this.adjustAutoClickerCost();
    } else if(this.donutCount <= this.autoClickerCost) {
      console.log("NOT ENOUGH DONUTS!")
    } else {
      
    }
  }

  getDonutMultiplierCount() {
    return this.donutMultiplierCount;
  }

  getDonutMultiplierCost() {
    return this.donutMultiplierCost.toFixed(2);
  }

  adjustDonutMultiplierCost() {
    this.donutMultiplierCost += (this.donutMultiplierCost * 0.1);
  }

  purchaseDonutMultiplier() {
    if (this.donutCount >= this.donutMultiplierCost) {
      this.donutMultiplierCount += 1;
      this.donutCount -= this.donutMultiplierCost;
      console.log('Multi', this.donutMultiplierCount);
      console.log('multi$$$', this.donutMultiplierCost);
      this.adjustDonutMultiplierCost();
      this.adjustClickValue();
    } else if (this.donutCount < this.donutMultiplierCost) {
      console.log("NOT ENOUGH DONUTS!")
    }
  }

  adjustClickValue() {
    this.clickValue = Math.pow(1.2, this.donutMultiplierCount);
  }


}


