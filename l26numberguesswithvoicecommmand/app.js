// Get UI
const minnum = document.querySelector('.minnumber'),
      maxnum = document.querySelector('.maxnumber');

const getinput = document.querySelector('#guessnumber');
const getbtn = document.querySelector('#btn');

const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message2');

let min = 1,
max= 10,
gameleft = 3,
winningnum = 5;

minnum.innerText =  min;
maxnum.textContent = max;

function randommum(min,max){
    let getrdm = Math.floor(Math.random() * (max-min) + 1);
    return getrdm;
}

// console.log(winningnum);

function setmessage1(msg,color){
    massage1.textContent = msg;
    massage1.style.color = color;
}

function setmessage2(msg,color){
    massage1.textContent = msg;
    massage1.style.color = color;
}

function gameover(won,msg){

    let color;

    won == true ? color = 'green' : color = 'red';

    getinput.disabled = true;

    getinput.style.borderColor = color;

    setmessage1(msg,color);

    getbtn.value = 'Play Again';

}


getbtn.addEventListener('click',function(){

    let guess = +getinput.value;
    // console.log(guess);


    if(guess < min || guess > max || isNaN(guess)){
        setmessage2(`Please enter a number between ${min} to ${max}`,'red');
    }

});