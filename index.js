if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  var player1 = Math.floor((Math.random()*6)+1);
  var player2 = Math.floor((Math.random()*6)+1);
  if(player1>player2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  }else if(player1===player2){
    document.querySelector("h1").innerHTML = "Draw!";
  }
  else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  }
  switch(player1){
    case 1:document.querySelector("div .img1").setAttribute("src","images/dice1.png");
    break;
    case 2:document.querySelector("div .img1").setAttribute("src","images/dice2.png");
    break;
    case 3:document.querySelector("div .img1").setAttribute("src","images/dice3.png");
    break;
    case 4:document.querySelector("div .img1").setAttribute("src","images/dice4.png");
    break;
    case 5:document.querySelector("div .img1").setAttribute("src","images/dice5.png");
    break;
    case 6:document.querySelector("div .img1").setAttribute("src","images/dice6.png");
    break;
  }

  switch(player2){
    case 1:document.querySelector("div .img2").setAttribute("src","images/dice1.png");
    break;
    case 2:document.querySelector("div .img2").setAttribute("src","images/dice2.png");
    break;
    case 3:document.querySelector("div .img2").setAttribute("src","images/dice3.png");
    break;
    case 4:document.querySelector("div .img2").setAttribute("src","images/dice4.png");
    break;
    case 5:document.querySelector("div .img2").setAttribute("src","images/dice5.png");
    break;
    case 6:document.querySelector("div .img2").setAttribute("src","images/dice6.png");
    break;
  }
  console.info( "This page is reloaded" );
} else {
  console.info( "This page is not reloaded");
}
