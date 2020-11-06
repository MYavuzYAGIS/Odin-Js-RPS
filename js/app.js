
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


function GAME(aiselect, playerselect){
    if(tie < 5 && user<5 && ai<5){

    }else{

    }


}









// https://github.com/ivanv257/Rock-Paper-Scissors-JavaScript-Project/blob/master/script.js

// nice and compatible code to try!




