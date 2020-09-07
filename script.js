var yearlyCostEle = document.body.querySelector(".yearlyCost");
var tryAgainEle = document.body.querySelector(".tryAgain");



function askUser(){
  var numberMiles = Number(prompt("Number of mile you drive a year on estimate?"));
  var gasPrice = Number(prompt("Whats the current price of gas?"));
  var perGallon = Number(prompt("Whats the MPG of the vehical ?"));
  yearlyCost = numberMiles * gasPrice * perGallon;
  yearlyCostEle.innerHTML = " To drive a car with an MPG rating of "+ perGallon + " for " + numberMiles + " miles at " + gasPrice + " per gallon would cost "+ yearlyCost;
}

//function displayYearly(yearlyCost){
  //yearlyCostEle.innerHTML = "To drive a car with an MPG rating of "+ perGallon + "for" +numberMiles+ "miles at" +gasPrice+ "per gallon would cost "+yearlyCost;


tryAgainEle.addEventListener("click",function(){
   askUser();
 });