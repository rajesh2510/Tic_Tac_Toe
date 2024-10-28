let boxes= document.querySelectorAll(".box");
//console.log(boxes);//-> returns nodelist of all boxes like array
let resetbtn= document.querySelector(".reset");
let turnO=true; //player O turn
const winpatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.style.color="green";
            box.innerText="O";
            
            turnO=false;
        }
        else{
            box.style.color="#231942";
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
       
    });
    
   
});

const checkwinner= ()=>{
    count++;
    let flag = false;
      for(let pattern of winpatterns){
        let pos1 =boxes[pattern[0]].innerText;
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 =boxes[pattern[2]].innerText;
      
      if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            disableboxes();
            document.querySelector(".winnertext").innerText=`Congratulations, Winner is ${pos1}`;
            console.log("winner");
            flag = true;
          break;
        }
        else if(count==9){
            
            document.querySelector(".winnertext").innerText="It's a Tie game";
        }
      }
          }
    if(!flag && count===9){
        document.querySelector(".winnertext").innerText=`It's a tie game`;
    }
};

/*if(flag){
    document.querySelector(".winnertext").innerText=`It's a tie game`;
}
*/
const disableboxes=()=>{
  for(box of boxes){
    box.disabled=true;
  }
};
resetbtn.addEventListener("click",()=>{
for(box of boxes){
    box.disabled=false;
    box.innerText="";
}
count=0;
turnO=true;
document.querySelector(".winnertext").innerText="";
});
 
