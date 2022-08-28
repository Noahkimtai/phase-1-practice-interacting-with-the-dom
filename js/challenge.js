let counter = document.querySelector('#counter')
let plusBtn = document.querySelector('#plus')
let minusBtn = document.querySelector('#minus')
let heartBtn = document.querySelector('#heart')
let pauseBtn= document.querySelector('#pause')


setInterval(increaseCounter,1000)

function increaseCounter(){
    return counter.innerText =parseInt(counter.innerText)+1
}

// add event listener to minus and plus
plusBtn.addEventListener('click',(e)=>counter.innerText=parseInt(counter.innerText)+1);
minusBtn.addEventListener('click',(e)=>counter.innerText=parseInt(counter.innerText)-1);

