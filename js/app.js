
// Global Variables
let result = document.querySelector('.result').innerText;
let aiselect;
let playerselect;
// Player Variables:
let ai_upper;
const buttons = document.querySelectorAll('.btn')

// score variables:
let tie = document.querySelector('.tie').innerText;
let ai = document.querySelector('.ai').innerText;
let user = document.querySelector('.user').innerText;

let scoreai=0;
let scoreuser=0;
let tied=0;

// user selections
buttons.forEach((button) =>{button.addEventListener('click',()=>{
    playerselect = button.id;
    console.log(playerselect)
    aiselection()
    console.log(aiselect)
    })
})


function game(playerselect, aiselect){
    if(scoreuser < 5 && scoreai < 5 ){
        if(playerselect==aiselect){
            result = 'It is a Tie!'
            tied = tied+1
        }else if(playerselect=='rock' && aiselect=='paper'){
            result = 'Paper Wraps the Rock, Sorry User!'
            scoreai++;
        }else if(playerselect == 'rock' && aiselect =='scissors'){
            result= 'Rock Breaks the Scissors. Cool, User!'
            scoreuser++;
        }else if(playerselect == 'paper' && aiselect=='rock'){
            result = 'Paper Wraps the Rock!, Well done!'
            scoreuser++;
        }else if(playerselect == 'paper' && aiselect=='scissors'){
            result = 'Ai Picked Scissors and cut the User in Half!'
            scoreai++;
        }else if(playerselect =='scissors' && aiselect=='rock'){
            result='Oh Boy! User is smashed with a ROCK!'
            scoreai++;
        }else if(playerselect == 'scissors' && aiselect=='paper'){
            result='No More AI!. Paper is in Pieces!'
            scoreuser++;
        }
    }else{
        if (scoreuser>scoreai && scoreuser ==score5){
            result = 'Game Over. User Wins!'
        }else if(scoreai>scoreuser && scoreai ==score5){
            result = 'Game Over. Ai wins'}   
    }
}



// AI GAME WORKS!
function aiselection(){
    let answer =  Math.floor(Math.random()* (3) +1);
    if (answer==1) {
        ai_upper= 'Rock!'
        document.querySelector('.sub-header').textContent=`AI selected ${ai_upper}`
        aiselect= 'rock';
        
    } else if(answer==2) {
        ai_upper='Scissors!'
        document.querySelector('.sub-header').textContent=`AI selected ${ai_upper}`
        aiselect= 'scissors'
    }else if(answer==3){
        ai_upper = 'Paper!'
        document.querySelector('.sub-header').textContent=`AI selected ${ai_upper}`
        aiselect= 'paper'
    }
    document.getElementById('result').style.fontFamily="sans"
    document.getElementById('result').style.fontSize="3rem"
}

game(playerselect, aiselect)