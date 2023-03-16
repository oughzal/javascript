const container = document.getElementById('container')
const nb = document.getElementById('nb')
var carte1 = null
var carte2 = null
var L= []
function charger(nb){
    container.innerHTML =""
    L=[]
    fontawsome.sort(()=>Math.random()-0.5)
    for(let i=0;i<nb;i++){
        L.push(fontawsome[i])
    }
    L.sort(()=>Math.random()-0.5)
    for(let i=0;i<nb;i++){
        L.push(fontawsome[i])
    }
    L.sort(()=>Math.random()-0.5)
    let i = 0
    for(let e of L){
        let div = document.createElement('div')
        div.classList.add('carte','cacher')
        div.setAttribute('index',i++)
        let fa = document.createElement('i')
        fa.classList.add('fa','fa-'+ e.Class)
        div.appendChild(fa)
        container.appendChild(div)
        div.onclick = function(){
            if (carte1 !=null &&  carte2 != null) {
                carte1.classList.remove('selected')
                carte2.classList.remove('selected')
                carte1.classList.add('cacher')
                carte2.classList.add('cacher')
                carte1 = null
                carte2 = null
            }
            if(carte1 ==null){
                carte1 = this
                this.classList.add('selected')
                this.classList.remove('cacher')
            }
            else{
                if(carte1 == this) return false;
                carte2 = this
                this.classList.remove('cacher')
                this.classList.add('selected')
                index1 = parseInt(carte1.getAttribute('index'))
                index2 = parseInt(carte2.getAttribute('index'))
                if(L[index1].Class == L[index2].Class){
                    carte1.onclick =null
                    carte2.onclick =null
                    carte1.style.cursor ="default"
                    carte2.style.cursor ="default"
                    carte1.classList.remove('selected')
                    carte2.classList.remove('selected')
                    carte1.classList.add('win')
                    carte2.classList.add('win')
                    carte1 = null
                    carte2 = null
                }
            }
            
        }
    }  
}
function newGame(){
    charger(nb.value)
}
