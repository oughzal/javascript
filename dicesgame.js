const dice = document.getElementById("dice")
const go = document.getElementById("startGame")
var dices = ['dice1.svg','dice2.svg','dice3.svg','dice4.svg','dice5.svg','dice6.svg',]
var index =  0;
var stop = true;
var timer = null
go.onclick = function(){
    this.textContent = stop ? "Stop" : "GO"
        stop = ! stop
        if(stop){
            clearInterval(timer)
            stop = true
        }
        else{
            timer = setInterval(function(){
            stop = false
            index = parseInt(Math.random()*10)%6
            dice.src = "dices/" + dices[index]
        },50)
        }

        
}

function jouer(){
    
}
