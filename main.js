const box=document.getElementById("box");
const timer=document.getElementById("timer");
const game=document.getElementById("game");
const totalScore=document.getElementById("score");
const levelScore=document.getElementById("lvlScore");
const target=document.getElementById("target");
const level=document.getElementById("level")

function getArray(start,next,end){
     let array=[];
      for (let index = start ; index <=end; index+=next) 
      { array.push(index); }
     return array;
     }

     function getNumber(someArray){
         let num= Math.floor(Math.random()*someArray.length) 
         return someArray[num]; 
        }
function randomPosiition(){
    let x=getNumber(getArray(0,5,1350));
    let y=getNumber(getArray(0,5,450));

    box.style.top=`${y}px`;
    box.style.left=`${x}px`;


}
function time(x){ 
    timer.innerHTML=`${x}`;
     if(x>0){timeout= setTimeout(() => { x--; time(x); }, 1000)}
     
   
     else{
        if(parseInt(levelScore.innerHTML) >=parseInt( target.innerHTML)){
            
     levelPassed();
     clearTimeout(timeout)
     }
     else{
        levelFailed();
   clearTimeout(timeout);
     }
    }
}
function startGame(){
    document.getElementById("start").style.display="none"
    game.style.display="flex"

randomPosiition();
time(30);
}
    

function refreshScore(){
    totalScore.innerHTML++;
    levelScore.innerHTML++;
}

function clickOnBox(){
    randomPosiition();
    refreshScore();
}


function levelPassed(){
    game.style.display="none"
    document.getElementById("passed").style.display="block"
    document.getElementById("lvlpass").innerHTML=level.innerHTML;


}

function levelFailed(){
    game.style.display="none"
    document.getElementById("failed").style.display="block"
    document.getElementById("lvlfail").innerHTML=level.innerHTML;

}

function level2(){
    target.innerHTML=25;
    levelScore.innerHTML=0;
    level.innerHTML++;
    time(30);

    document.getElementById("passed").style.display="none";
    game.style.display="flex"

}

function level3(){
    target.innerHTML=30;
    levelScore.innerHTML=0;
    level.innerHTML++;
     time(30);
    document.getElementById("passed").style.display="none";
    game.style.display="flex"
    
}
function gameOver(){
    document.getElementById("passed").style.display="none";
    document.getElementById("game-over").style.display="block";
    document.getElementById("endScore").innerHTML=totalScore.innerHTML;


}

function nextLevel(){
    if(level.innerHTML=="1"){
        level2();
    }
    else if(level.innerHTML=="2"){
        level3();
    }
    else{
        gameOver();
    } 
  }

function playAgain(){
    window.location.reload();
  
  }
