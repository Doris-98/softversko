const kocka=document.getElementById("kocka");
const timer=document.getElementById("timer");

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

    kocka.style.top=`${y}px`;
    kocka.style.left=`${x}px`;


}
randomPosiition();
function time(x){ 
    timer.innerHTML=`${x}`;
     if(x>0){ setTimeout(() => { x--; time(x); }, 1000)}}


     time(10)
