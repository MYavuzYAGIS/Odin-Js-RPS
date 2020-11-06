
// Global Variables
const rockPlayed = document.querySelector('#rock');
const scissorsPlayed = document.querySelector('#scissors');
const paperPlayed = document.querySelector('#paper');
const result = document.querySelector('.result').textContent;
// Player Variables:
let aiselect;
let playerselect;

// score variables:
let tie = document.querySelector('.tie').textContent;
let ai = document.querySelector('.ai').textContent;
let user = document.querySelector('.user').textContent;


// Player Selection!

rockPlayed.addEventListener('click', ()=>{
    playerselect = 'rock';
    console.log(playerselect),
    AiGame()
})

scissorsPlayed.addEventListener('click',()=>{
    playerselect='scisors';
    console.log(playerselect)
    AiGame()
})

paperPlayed.addEventListener('click', ()=>{
    playerselect='paper';
    console.log(playerselect)
    AiGame()
})


// AI GAME WORKS!
function AiGame(){
    let ai_upper;
    let answer =  Math.floor(Math.random()* (3) +1);
    if (answer==1) {
        aiselect = 'rock';
        ai_upper= 'Rock!'
        document.querySelector('.result').textContent=`AI selected ${ai_upper}`
        console.log(aiselect)

        
    } else if(answer==2) {
        ai_upper='Scissors!'
        aiselect ='scissors';
        document.querySelector('.result').textContent=`AI selected ${ai_upper}`
        console.log(aiselect)


    }else if(answer==3){
        aiselect = 'paper';
        ai_upper = 'Paper!'
        document.querySelector('.result').textContent=`AI selected ${ai_upper}`
        console.log(aiselect)

    }else{
        return
    }
    document.getElementById('result').style.fontFamily="sans"
    document.getElementById('result').style.fontSize="3rem"
    
}


function GAME(playerselect,aiselect){
    if(user<5 && ai<5){
        if(aiselect==playerselect){
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


