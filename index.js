var randomNumber1=Math.floor((Math.random()*6))+1;
var randomDiceImage="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins the game.";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins the game.";
}
else{
    document.querySelector("h1").innerHTML="game is drawn.";
}
