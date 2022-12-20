// Get Ui

const getvideoscreen = document.getElementById('videoscreen');
 
const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const stopbtn = document.getElementById('stop');

const progress = document.getElementById('progress');
const getfullscreen = document.getElementById('fullscreen');

const videos = ['simplevideo1','simplevideo2']

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(vdo){
    getfullscreen.src = `./source/${vdo}.mp4`
}

function playvdo(){

    // play() method came from video api
    getvideoscreen.play();
}

playbtn.addEventListener('click',playvdo);