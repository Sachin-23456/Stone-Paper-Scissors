let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userchoice=document.querySelector("#user-score");
const compchoices=document.querySelector("#comp-score");
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userchoice.innerText=userScore;
        
        msg.innerText="You Win";
        msg.style.backgroundColor="blue";
    }else{
        compScore++;
        compchoices.innerText=compScore;
       
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
};
const drawgame=()=>{
    
    msg.style.backgroundColor="orange";
};
const compchoice=()=>{
   const options=["rock","paper","Scissors"];
   const userid=Math.floor(Math.random()*3);
   return options[userid];
};

const userplay=(userchoice)=>{
    
    const Compchoice=compchoice();
    
    if(userchoice === Compchoice){
      drawgame();
    }else{
        let userWin=true;
        if(userchoice === "paper"){
            userWin=Compchoice==="Scissors";
        }else if(userchoice=="rock"){
            userWin=Compchoice==="paper";
        }else{
            userWin=Compchoice==="rock";
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        
        const userchoice=choice.getAttribute("id");
         
         userplay(userchoice);
    });
});