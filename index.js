var random1 = Math.floor(Math.random() * 6) + 1;
var i= document.querySelectorAll("span");
document.querySelectorAll("span")[0].innerHTML = random1;

var random2 = Math.floor (Math.random() * 6) + 1;
var i= document.querySelectorAll("span");
document.querySelectorAll("span")[1].innerHTML = random2;

if (random1 > random2) {
  document.querySelector("marquee").innerHTML = "🚩PLAYER_1 WINS!" ;
} 
else if (random2 > random1) {
  document.querySelector("marquee").innerHTML = "🚩PLAYER_2 WINS!" ;
}
else {document.querySelector("marquee").innerHTML = "🚩DRAW🤗!" ;
}