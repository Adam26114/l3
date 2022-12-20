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

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    // play() method came from video api
    getvideoscreen.play();
}

function pausevdo(){

    playbtn.querySelector('i.fas').remove('fa-pause');
    playbtn.querySelector('i.fas').add('fa-play');
    
    // pasue() method came from video api
    getvideoscreen.pasue();
}

playbtn.addEventListener('click',playvdo);