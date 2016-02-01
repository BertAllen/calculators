app.controller("CalculatorController", function(){
    
  app.controller("ViewController", function(){
      
      this.viewSetter = function(clicked){
      this.currentView=clicked;
      }
  }); //end ViewController  
    
    app.controller("ConvController", function(){
        
              this.distanceConv = function(numIn,units){
            if(units === "K"){
                return numIn*0.6214;
            } else {
                return numIn/0.6214;
            }
        }
        
        this.tempatureConv = function(numIn, units){
            if(units === "C"){
                return numIn*9/5+32;
            } else {
                return (numIn-32)*5/9;
            }
        }
        
        this.weightConv = function(numIn, units){
            if(units === "P"){
                return numIn/2.2046;
            } else {
                return numIn*2.2046;
            }
        }
        
        this.lengthConv = function(numIn, units){
            if(units === "Y"){
                return numIn*0.9144;
            } else {
                return numIn/0.9144;
            }
        }
        
        this.volumeConv = function(numIn, units){
            if(units === "G"){
                return numIn*3.78541;
            }else{
                return numIn/3.78541;
            }
        }
        
        this.currencyConv = function(numIn, units){
            if(units === "D"){
                //it gets kinky from here ....
            }
        }
        
    }); //end ConvController
    
    
    
    
}) //end CalculatorController