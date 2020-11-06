
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


// user selections
buttons.forEach((button) =>{button.addEventListener('click',()=>{
    playerselect = button.id;
    console.log(playerselect)
    aiselection()
    console.log(aiselect)
    })
})

function game(playerselect, aiselect){
    if(user < 5 && ai < 5 ){
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


//Game Logic 

