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



const RESULT_TEXT = document.querySelector('.result').innerHTML;
let AiScore = document.querySelector('.ai').innerHTML;
let PlayerScore = document.querySelector('.playerx').innerHTML;
let StaleMate = document.querySelector('.tie').innerHTML;

function AiGame(){
// computer makes a random choice between 1 and 3, inclusive
    let aiselect;
    let answer =  Math.floor(Math.random()* (3) +1);
    console.log(answer)
    if (answer==1) {
        aiselect = 'rock';
        console.log(aiselect)
    } else if(answer==2) {
        aiselect ='scissors';
        console.log(aiselect)
    }else{
        aiselect = 'paper';
        console.log(aiselect)
    }
}
// AI GAME WORKS!




function PlayerGame(){
    let playerSelect;
    const rock = document.getElementsByClassName('.rock');
    let paper = document.getElementsByClassName('paper');
    let scissors = document.getElementsByClassName('scissors');
    
    if (rock.clicked==true) {
        playerSelect = 'rock';
        console.log('rock is selected')
        
    } else if(paper.clicked==true) {
        playerSelect ='paper'
        console.log('rock is selected')

        
    }else if (scissors.clicked==true){
        playerSelect ='scissors'
    }else {
        console.log('nothing is selected')
        
    }

}


function comparison(){


}
AiGame();

PlayerGame();






