var yearlyCostEle = document.body.querySelector(".yearlyCost");
var yearlyCost1Ele = document.body.querySelector(".yearlyCost1");
var yearlyCost2Ele = document.body.querySelector(".yearlyCost2");
var yearlyCost3Ele = document.body.querySelector(".yearlyCost3");
var tryAgainEle = document.body.querySelector(".tryAgain");
var perGallon = [12,17,26,29];


function askUser(){
  var numberMiles = Number(prompt("Number of mile you drive a year on estimate?"));
  var gasPrice = Number(prompt("Whats the current price of gas?"));
  yearlyCost = numberMiles * gasPrice * 12 ;
  yearlyCostEle.innerHTML = " To drive a car with an MPG rating of 12 for " + numberMiles + " miles at " + gasPrice + " per gallon would cost "+ yearlyCost;
 }
function askUser1(){
  var numberMiles = Number(prompt("Number of mile you drive a year on estimate?"));
  var gasPrice = Number(prompt("Whats the current price of gas?"));
  yearlyCost = numberMiles * gasPrice * 17 ;
  yearlyCost1Ele.innerHTML = " To drive a car with an MPG rating of 17 for " + numberMiles + " miles at " + gasPrice + " per gallon would cost "+ yearlyCost;
 }
function askUser2(){
  var numberMiles = Number(prompt("Number of mile you drive a year on estimate?"));
  var gasPrice = Number(prompt("Whats the current price of gas?"));
  yearlyCost = numberMiles * gasPrice * 26 ;
  yearlyCost2Ele.innerHTML = " To drive a car with an MPG rating of 26 for " + numberMiles + " miles at " + gasPrice + " per gallon would cost "+ yearlyCost;
 }
function askUser3(){
  var numberMiles = Number(prompt("Number of mile you drive a year on estimate?"));
  var gasPrice = Number(prompt("Whats the current price of gas?"));
  yearlyCost = numberMiles * gasPrice * 29 ;
  yearlyCost3Ele.innerHTML = " To drive a car with an MPG rating of 29 for " + numberMiles + " miles at " + gasPrice + " per gallon would cost "+ yearlyCost;
 }



tryAgainEle.addEventListener("click",function(){
  askUser();
  askUser1();
  askUser2();
  askUser3();
   });



  //yearlyCostEle.innerHTML = " To drive a car with an MPG rating of "+ perGallon + " for " + numberMiles + " miles at " + gasPrice + " per gallon would cost "+ yearlyCost;



//function displayYearly(yearlyCost){
  //yearlyCostEle.innerHTML = "To drive a car with an MPG rating of "+ perGallon + "for" +numberMiles+ "miles at" +gasPrice+ "per gallon would cost "+yearlyCost;