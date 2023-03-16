class Point{
    constructor(X,Y,color){
    this.X = X;
    this.Y = Y;
    this.color = color
    }
    old(){
        this.oldX = this.X;
        this.oldY = this.Y;
    }
    stroke(){
        abc.fillStyle= this.color
        abc.strokeRect(this.X*sizeX,this.Y*sizeY,sizeX,sizeY)
    }
    fill(){
        abc.fillStyle= this.color
        abc.fillRect(this.X*sizeX,this.Y*sizeY,sizeX,sizeY)
    }
    fillHead(){
        abc.fillStyle= "#0F0"
        abc.fillRect(this.X*sizeX,this.Y*sizeY,sizeX,sizeY)
    }
    clear(){
        abc.clearRect(this.X*sizeX,this.Y*sizeY,sizeX,sizeY)
    }


}
var snake =[];
const canvas = document.getElementById('canvas')
const abc=canvas.getContext('2d');
var nb=40
var food = null
sizeX = canvas.clientWidth/nb
sizeY = canvas.clientWidth/nb
function newGame(){
    snake.push(new Point(9,9,"#00F"))
    snake[0].fill() 
    newFood()
}

function newFood(){
    x = Math.floor(Math.random()*nb)
    y = Math.floor(Math.random()*nb)
    food = new Point(x,y,"#f00");
    food.fill()
}
function moveSnake(){
    for(i=0;i< snake.length;i++){
        if(i !=snake.length -1 ){
        snake[i].X = snake[i+1].X
        snake[i].Y = snake[i+1].Y
        }
    }
    drawSnake()
}
function drawSnake(){
    for(p of snake){
        p.fill();
    }
    snake[snake.length-1].fillHead()
    food.fill()
}
function clearScreen(){
    for(p of snake){
        p.clear()
    }  
}
document.body.onkeydown = function(event){
    console.log(event.keyCode)
    clearScreen()
    let head = snake[snake.length -1]
    x = head.X 
    y = head.Y
    if(event.keyCode==38){y--} //up
    if(event.keyCode==40){ y++} //down
    if(event.keyCode==37){x--}//left
    if(event.keyCode==39){x++} //right
    if(x==-1) x=nb -1
    if(y==-1) y=nb -1
    
    if(x==nb) x=0
    if(y==nb) y=0
    if(food.X == x && food.Y==y){
        food.color="#00F"
        snake.push(food)
        newFood()
    }
    else{
        head.X = x
        head.Y = y
    }
    moveSnake()
}

newGame()

