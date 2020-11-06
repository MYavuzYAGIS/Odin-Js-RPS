/* 
ne gerekiyor?
1) sayac olacak 0-0-0
2) kullanici bir i'ye basacak
3) pc ayni anda random bir secenek yapacak
4) karar mekanizmasi calisacak
5)karar sonucuna gore sayac update olacak
6)sayacta ai ya da person 5e ulastigi zaman oyun bitecek
7)basic comparison ile winner declare edilecek.
*/
const rockPlayed = document.querySelector('#rock');
const scissorsPlayed = document.querySelector('#scissors');
const paperPlayed = document.querySelector('#paper');

// Global Variables
let aiselect;
let playerselect;


// Player Selection!

rockPlayed.addEventListener('click', ()=>{
    playerselect = 'rock';
    console.log(playerselect)
})

scissorsPlayed.addEventListener('click',()=>{
    playerselect='scisors';
    console.log(playerselect)
})

paperPlayed.addEventListener('click', ()=>{
    playerselect='paper';
    console.log(playerselect)
})












// AI GAME WORKS!
function AiGame(){
    let answer =  Math.floor(Math.random()* (3) +1);
    if (answer==1) {
        aiselect = 'rock';
        document.querySelector('.result').textContent='Ai Selected Rock!'
        console.log(aiselect)

        
    } else if(answer==2) {
        aiselect ='scissors';
        document.querySelector('.result').textContent='Ai Selected Scissors!'
        console.log(aiselect)


    }else if(answer==3){
        aiselect = 'paper';
        document.querySelector('.result').textContent='Ai Selected Paper!'
        console.log(aiselect)

    }else{
        return
    }
    document.getElementById('result').style.fontFamily="sans"
    document.getElementById('result').style.fontSize="3rem"
    
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




