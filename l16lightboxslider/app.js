var getimgs = document.querySelectorAll('.img');
// console.log(getimgs); //Nodelist


var getmodal = document.querySelector('.modal');
var getbtnclose = document.querySelector('.btn-close');
var getviews = document.getElementsByClassName('view');
// console.log(getviews); // HTML Collection
var getprev = document.querySelector('.prev');
var getnext = document.querySelector('.next');
var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.caption');
var getnoactive = document.getElementsByClassName('noactive');

// console.log(getnoactive); // HTML Collection

for(var i = 0 ; i < getimgs.length;i++){
    // console.log( getimgs[i]);

    getimgs[i].addEventListener('click',showmodal);
}

function showmodal(){
    getmodal.style.display = 'block';
}

// getbtnclose.addEventListener('click',function(){
//     getmodal.style.display = 'none';
// });

getbtnclose.onclick = function(){
    getmodal.style.display = "none";
}

document,addEventListener('click',function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = "none"
    }
})

// 21LB