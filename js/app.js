
// Global Variables
const rockPlayed = document.querySelector('#rock');
const scissorsPlayed = document.querySelector('#scissors');
const paperPlayed = document.querySelector('#paper');
let result = document.querySelector('.result').textContent;
// Player Variables:
let playerselect;
let ai_upper;

// score variables:
let tie = document.querySelector('.tie').textContent;
let ai = document.querySelector('.ai').textContent;
let user = document.querySelector('.user').textContent;


// Player Selection!
function userplay(){
    rockPlayed.addEventListener('click', ()=>{
        playerselect=game('rock',aiselect())
        console.log(playerselect)

    })

    scissorsPlayed.addEventListener('click',()=>{
        playerselect=game('scissors',aiselect())
        
    })

    paperPlayed.addEventListener('click', ()=>{
        playerselect=game('paper',aiselect())
    })
}
// AI GAME WORKS!
let aiselect=()=>{
    let answer =  Math.floor(Math.random()* (3) +1);
    if (answer==1) {
        ai_upper= 'Rock!'
        document.querySelector('.sub-header').textContent=`AI selected ${ai_upper}`
        return 'rock';
    } else if(answer==2) {
        ai_upper='Scissors!'
        document.querySelector('.sub-header').textContent=`AI selected ${ai_upper}`
        return 'scissors'
    }else if(answer==3){
        ai_upper = 'Paper!'
        document.querySelector('.sub-header').textContent=`AI selected ${ai_upper}`
        return 'paper'
    }
    document.getElementById('result').style.fontFamily="sans"
    document.getElementById('result').style.fontSize="3rem"
}


//Game Logic 

function game(playerselect,aiselect){
    if(user<5 && ai<5){
        if(playerselect==aiselect){
            result = 'It is a Tie!'
            tie = tie+1
        }else if(playerselect=='rock' && aiselect=='paper'){
            result = 'Paper Wraps the Rock, Sorry User!'
            ai++;
        }else if(playerselect == 'rock' && aiselect =='scissors'){
            result= 'Rock Breaks the Scissors. Cool, User!'
            user++;
        }else if(playerselect == 'paper' && aiselect=='rock'){
            result = 'Paper Wraps the Rock!, Well done!'
            user++;
        }else if(playerselect == 'paper' && aiselect=='scissors'){
            result = 'Ai Picked Scissors and cut the User in Half!'
            ai++;
        }else if(playerselect =='scissors' && aiselect=='rock'){
            result='Oh Boy! User is smashed with a ROCK!'
            ai++;
        }else if(playerselect == 'scissors' && aiselect=='paper'){
            result='No More AI!. Paper is in Pieces!'
            user++;
        }
    }else{
        if (user>ai && user ==5){
            result = 'Game Over. User Wins!'
        }else if(ai>user && ai ==5){
            result = 'Game Over. Ai wins'}   
    }
}

game(playerselect, aiselect)