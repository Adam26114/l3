var getimgs = document.querySelectorAll('.img');
// console.log(getimgs); //Nodelist


var getmodal = document.querySelector('.modal');
var getbtnclose = document.querySelector('.btn-close');
var getviews = document.getElementsByClassName('view');
// console.log(getviews); // HTML Collection
var getprevbtn = document.querySelector('.prev');
var getnextbtn = document.querySelector('.next');
var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.caption');
var getnoactive = document.getElementsByClassName('noactive');

var curidx = 1;

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
});


function currentview(num){

    slideshow(num);

}

getnextbtn.addEventListener('click',function(){
    // console.log('i am next');

    slideshow(curidx += 1);

});

getprevbtn.addEventListener('click',function(){
    // console.log('i am prev');
    
    slideshow(curidx -= 1);
});


function slideshow(num){
    
    console.log(num);

}

// 21LB