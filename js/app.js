
// Global Variables
let aiselect;
let playerselect;
// Player Variables:
let ai_upper;
const buttons = document.querySelectorAll('.btn')

let scoreai=0;
let scoreuser=0;
let tied=0;
// score variables:
document.querySelector('.tie').innerText=tied;
document.querySelector('.ai').innerText=scoreai;
document.querySelector('.user').innerText=scoreuser;


function game(playerselect, aiselect){
    if(scoreuser < 5 && scoreai < 5 ){
        if(playerselect==aiselect){
            document.getElementById('result').textContent = 'It is a Tie!'
            tied = tied+1
            document.querySelector('.tie').innerText=tied
        }else if(playerselect=='rock' && aiselect=='paper'){
            document.getElementById('result').textContent = 'Paper Wraps the Rock, Sorry User!'
            scoreai++;
            document.querySelector('.ai').innerText =scoreai
        }else if(playerselect == 'rock' && aiselect =='scissors'){
            document.getElementById('result').textContent= 'Rock Breaks the Scissors. Cool, User!'
            scoreuser++;
            document.querySelector('.user').innerText = scoreuser;
        }else if(playerselect == 'paper' && aiselect=='rock'){
            document.getElementById('result').textContent = 'Paper Wraps the Rock!, Well done!'
            scoreuser++;
            document.querySelector('.user').innerText=scoreuser;
        }else if(playerselect == 'paper' && aiselect=='scissors'){
            document.getElementById('result').textContent = 'Ai Picked Scissors and cut the User in Half!'
            scoreai++;
            document.querySelector('.ai').innerText= scoreai
        }else if(playerselect =='scissors' && aiselect=='rock'){
            document.getElementById('result').textContent='Oh Boy! User is smashed with a ROCK!'
            scoreai++;
            document.querySelector('.ai').innerText = scoreai
        }else if(playerselect == 'scissors' && aiselect=='paper'){
            document.getElementById('result').textContent='No More AI!. Paper is in Pieces!'
            scoreuser++;
            document.querySelector('.user').innerText=scoreuser
        }
    }else{
        if (scoreuser > scoreai && scoreuser ==5){
            document.getElementById('result').textContent = 'Game Over. User Wins!'
            scoreai=0;
            scoreuser=0;
            tied=0;
            document.querySelector('.user').innerText=scoreuser;
            document.querySelector('.tie').innerText=tied
            document.querySelector('.ai').innerText=scoreai;
        }else if(scoreai>scoreuser && scoreai ==5){
            document.getElementById('result').textContent = 'Game Over. Ai wins'
            scoreai=0;
            scoreuser=0;
            tied=0;
            document.querySelector('.user').innerText=scoreuser;
            document.querySelector('.tie').innerText=tied
            document.querySelector('.ai').innerText=scoreai;

        }   
    }
}


// user selections
buttons.forEach((button) =>{button.addEventListener('click',()=>{
    playerselect = button.id;
    console.log(playerselect)
    aiselection()
    console.log(aiselect)
    console.log(scoreai)
    console.log(tied)
    game(playerselect,aiselect)
    })
})



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
