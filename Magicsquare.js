const nb = document.getElementById('nb')
const magicsquare = document.getElementById('magicsquare')
nb.onchange = function(){
    drawTable()
    let N = nb.value
    i = 0;
    j = parseInt(N/2); 
     for(k=1;k<=N*N;k++){
        magicsquare.children[i].children[j].textContent = k
        if(k % N ==0){
            i++;
        }
        else{
            i--;
            j--;
            if(i<0) i=N-1;
            if(j<0) j=N-1;
        }
    }
}

function fillSelect(max){
    for(let i=3;i<=max;i+=2){
        let option =  document.createElement('option')
        option.textContent = i
        option.value = i
        nb.appendChild(option)
    }
    let changeEvent = new Event('change');
    nb.dispatchEvent(changeEvent)
}

function drawTable(){
    magicsquare.innerHTML=""
    for(let i=0;i <nb.value;i++){
        let tr = document.createElement("tr")
        for(let j=0;j <nb.value;j++){
            let td = document.createElement("td")
            tr.appendChild(td)
        }
        magicsquare.appendChild(tr)
    }
}

fillSelect(19)