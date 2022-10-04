var getdots = document.getElementsByClassName('dot');
var getpages = document.getElementsByClassName('page');
// console.log(getpages); //HTMLCollection
var getform = document.getElementById('form');
var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');

var curridx = 0;

showpage(curridx);

function showpage(num){
    // console.log(num);

    getpages[num].style.display = "block";

    num === 0 ? getprevbtn.style.display = "none" : getprevbtn.style.display = "inline-block"

}

function gonow(){
    // console.log('hey');
}