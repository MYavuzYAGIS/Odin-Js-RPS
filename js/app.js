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
let playerselect='nothing is selected';
let aiselect;







function AiGame(){
// computer makes a random choice between 1 and 3, inclusive
    
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
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');

    rock.addEventListener("click",()=>{playerselect=rock.querySelector("span").innerText; console.log(playerselect)})
    paper.addEventListener("click",()=>{playerselect=paper.querySelector("span").innerText; console.log(playerselect)})
    scissors.addEventListener("click",()=>{playerselect=scissors.querySelector("span").innerText; console.log(playerselect)})
    // if user click on this, playerselect == this. else, this.
}

// PlayerGame Works!

function comparison(){


}


function Game(){
AiGame()
PlayerGame()
comparison()

};

Game()





