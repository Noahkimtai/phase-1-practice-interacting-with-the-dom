let counter = document.querySelector('#counter')
let plusBtn = document.querySelector('#plus')
let minusBtn = document.querySelector('#minus')
let heartBtn = document.querySelector('#heart')
let pauseBtn= document.querySelector('#pause')


let createInterval = setInterval(increaseCounter,1000)

function increaseCounter(){
    return counter.innerText =parseInt(counter.innerText)+1
}

// add event listener to minus and plus
plusBtn.addEventListener('click',(e)=>counter.innerText=parseInt(counter.innerText)+1);
minusBtn.addEventListener('click',(e)=>counter.innerText=parseInt(counter.innerText)-1);

heartBtn.addEventListener('click', (e)=>hearted(e))

function hearted(e){
    let likesCount= 0;
    let likesList = document.querySelector('.likes');
    let likedNumber= document.createElement('li')
    likedNumber.innerText=`${counter.innerText} was liked !`
    likesList.appendChild(likedNumber)
}

pauseBtn.addEventListener('click', e=> stopCounter(e))

function stopCounter(e){
clearInterval(createInterval)
}



// select the comment form 
let commentForm = document.querySelector('#comment-form')
console.log(commentForm)
commentForm.addEventListener('submit', e =>{console.log('clicky')})

