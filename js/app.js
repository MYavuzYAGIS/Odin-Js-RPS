const rockPlayed = document.querySelector('#rock');
const scissorsPlayed = document.querySelector('#scissors');
const paperPlayed = document.querySelector('#paper');

// Global Variables
let aiselect;
let playerselect;

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


function play(playerselect, aiselect){


}










// function PlayerGame(){
//     let rock = document.getElementById('rock');
//     let paper= document.getElementById('paper');
//     let scissors = document.getElementById('scissors');

// }

// function PlayGame(aiselect, playerselect){
//     if (aiselect==playerselect) {
//         document.querySelector('.result')='AI selected what you selected it is a tie!';
//         document.querySelector('.tie').innerHTML++;
        
//     } else if() {
        
//     }else if(){

//     }else if(){

//     }



// }

// https://github.com/ivanv257/Rock-Paper-Scissors-JavaScript-Project/blob/master/script.js

// nice and compatible code to try!




