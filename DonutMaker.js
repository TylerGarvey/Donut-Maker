
export default class DonutMaker {
    constructor() {
      this.donutCount = 0;
      this.clickValue = 1;
      this.autoClickerCount = 0;
      this.donutMultiplierCount = 0;
      this.autoClickerCost = 5;
      this.autoClickerRate = 1;
      this.donutMultiplierCost = 10;
    }

    makeDonut(){
      this.donutCount += this.clickValue;
    }
    getClickValue(){
      return this.clickValue;
    }

    getDonutCount() {
      return Math.round(this.donutCount);
    }
    

    getAutoClickerCount() {
      return this.autoClickerCount
    }

    getAutoClickerRate() {
      return this.autoClickerRate;
    }
    // TODO may not need
    getAutoClickerCost() {
      return this.autoClickerCost;
    }
    
    
 
    adjustAutoClickerCost() {
      this.autoClickerCost == this.autoClickerCost * 1.1;
    }
    purchaseAutoClicker(){
      if(this.donutCount >= this.autoClickerCost){
        this.autoClickerCount ++;
        this.donutCount -= this.autoClickerCost;
        this.adjustAutoClickerCost;
    } else if(this.donutCount < this.autoClickerCost){
      console.log("NOT ENOUGH DONUTS!")
    }
    }

    getDonutMultiplierCount() {
      return this.donutMultiplierCount;
    }
    getDonutMultiplierCost(){
      return this.donutMultiplierCost;
    }
    adjustDonutMultiplierCost(){
      this.donutMultiplierCost == this.donutMultiplierCost * 1.1;
    }
    purchaseDonutMultiplier(){
      if(this.donutCount >= this.donutMultiplierCost){
        this.donutMultiplierCount += 1;
        this.donutCount -= this.donutMultiplierCost;
        this.adjustDonutMultiplierCost;
        this.adjustClickValue;
      }else if(this.donutCount < this.autoClickerCost){
        console.log("NOT ENOUGH DONUTS!")
      }
    }
    adjustClickValue(){
      this.clickValue == Math.pow(1.2, this.donutMultiplierCount);
    }
  
  
}

  
  