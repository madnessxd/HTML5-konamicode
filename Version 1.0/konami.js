//UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A

var Konami = function (functionName) {
   var keyPressed; //last key pressed
   var konami = ["38", "38", "40", "40", "37", "39", "37", "39", "98", "97"]; //Konami code converted in keyCodes.
   var konamiCounter = 0;
   var konamiBool = false; //Boolean set to true when konamicode is enabled.
   var konamiFunction = functionName || "noFunction";

   window.addEventListener("keypress", keyDown, false);

   function noFunction(){
      alert("use setKonamiFunction(METHOD NAME); to select a method to run \nor call it in the constructor: var konami = new Konami(METHOD NAME);");
   }

   this.getKonamiBool = function(bool){
      return konamiBool;
   }

   function setKonamiBool(bool){
      konamiBool = bool;
   }

   this.setKonamiFunction = function(functionName){
      konamiFunction = functionName;
   }

   //Check keyboard input for Konami code.
   function konamiCheck(id){
      if(konami[konamiCounter] == id){
         konamiCounter++;
      } else {
         konamiCounter = 0;
      }
      if(konamiCounter == konami.length){
         setKonamiBool(true);
         console.log("**Konami Code activated**");
         if(konamiFunction != "noFunction"){
            try {
               window[konamiFunction]();
            } catch (e) {
               alert("'" + konamiFunction + "' is not a real function. Recheck your syntax.")
            }
	 } else {
            noFunction();
         }
      }
   }

   //Check for keyboard input.
   function keyDown(e){
      keyPressed = e.keyCode;
      if(keyPressed == 0){
         keyPressed = e.charCode;
      }
      if(!konamiBool){
         konamiCheck(keyPressed);
      }
   }
}

//Change the function to call when the code gets activated.
Konami.prototype.setFunction = function (functionName) {
   this.setKonamiFunction(functionName);
};

//Get the boolean state of the Konami code.
Konami.prototype.getKonami = function(){
   return this.getKonamiBool();
};

//---------------------------------//
//--------Konami Code HTML5--------//
//-11/04/2015 - Dennis Reep - v1.0-//
//---------------------------------//