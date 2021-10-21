let userScore=0;
let oppScore=0;
const userScore_span=document.getElementById("user-score");
const oppScore_span=document.getElementById("opp-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result>p")
const rock_div=document.getElementById("r");
const retry_div=document.querySelector(".res");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

/* Function to reload page */
function reloadPage(){
    location.reload();


}
/* Function to display winner message*/
function checkWinner(userScore ){
    if(userScore<11){
       return; 
    }else{
        document.getElementById("fade").style.opacity = "0";
        document.getElementById("fade1").style.opacity = "0";

        result_div.innerHTML="🔥 winner 🔥";
        retry_div.style.opacity="1";
    }

}
/* Function to display lost message */
function checkLoser(oppScore ){
    if(oppScore<11){
       return; 
    }else{
        document.getElementById("fade").style.opacity = "0";
        document.getElementById("fade1").style.opacity = "0";
        result_div.innerHTML="😥 Retry 😥";
        retry_div.style.opacity="1";
        retry_div.addEventListener("click",function(){
            userScore=0;
            oppScore=0;
            main();
        })
    }

}
/* Function to return computer choices */
function getComputerChoice(){
    const choices=['r','p','s'];
    const cmpChoice=Math.floor(Math.random()*3);
    return choices[cmpChoice];
}

/* Function to convert choices to word */
function toWord(letter){
    if(letter=='r') return "rock";
    if(letter=='p') return "paper";
    if(letter=='s') return "scissor";

}
/* Function to update user's score */
function win(user , comp){
    const userChoice_div=document.getElementById(user);
    userScore++;
    userScore_span.innerHTML=userScore;
    oppScore_span.innerHTML=oppScore;
    result_div.innerHTML= toWord(user) +" beats "+ toWord(comp)+" You win 🔥";
   userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')},300);
    checkWinner(userScore);

    
}
/* Function to update computer's score  */
function lose(user, comp){
    const userChoice_div=document.getElementById(user);
    oppScore++;
    userScore_span.innerHTML=userScore;
    oppScore_span.innerHTML=oppScore;
    result_div.innerHTML=toWord(comp)  +" beats "+ toWord(user)+" You Lose 😥";
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')},300);
    checkLoser(oppScore);
}
/* Function to display draw*/
function draw(user , comp){
    const userChoice_div=document.getElementById(user);
    result_div.innerHTML= " Its a Draw 😐";
    userChoice_div.classList.add('grey-glow');
    setTimeout(function() {userChoice_div.classList.remove('grey-glow')},300);
}

/* Function to check result */
function game(userChoice){
    const computerChoice=getComputerChoice();
   switch(userChoice + computerChoice){
       case "rs":
       case "pr":
       case "sp":
           win(userChoice,computerChoice);
       break;
       case "sr":
       case "rp":
       case "sp":
           lose(userChoice,computerChoice); 
        break;
       case "rr":
       case "pp":
       case "ss":
           draw(userChoice,computerChoice);
   }

}


function main(){
    rock_div.addEventListener("click",function(){
        game("r");
    })
    
    paper_div.addEventListener("click",function(){
        game("p");
    })
    
    
    scissor_div.addEventListener("click",function(){
       game("s");
    })
    

}

main();
