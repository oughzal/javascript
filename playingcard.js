function getCards(){
    let colors = ['H','P','D','T']
    let numbers=['1','2','3','4','5','6','7','8','9','10','J','Q','K']
    colors = colors.sort(()=> Math.random()-0.5)
    numbers = numbers.sort(()=> Math.random()-0.5)
    let cards=[]
    for(let c of colors){
        for(n of numbers){
            cards.push(n + c + ".svg")
            cards = cards.sort(()=> Math.random()-0.5)
        }
    }
    cards = cards.sort(()=> Math.random()-0.5)
    return cards
}

const cartes = document.getElementById('cartes');
const go = document.getElementById('startGame')
var cards = getCards()
var i = 0
go.onclick = function(){
    if (i == 14){
        i=0;
        cartes.innerHTML=""
        cards = getCards()
    }
        let img = document.createElement('img')
        img.src='cards/' + cards[i]
        img.alt = cards[i]
        img.classList.add('carte')
        img.style.zIndex = i++
        // img.style.left = String(20*i +600) +"px"
        img.style.transformOrigin ="left bottom"
        img.style.transform = "rotate("+String(5*i -50)+"deg)"
        cartes.append(img)
    
    

}

setInterval(function(){
    go.click()
},1000)

