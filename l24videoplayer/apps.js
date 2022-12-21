// UI
const getvideoscreen = document.getElementById('videoscreen');

const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const stopbtn = document.getElementById('stop');

const progress = document.getElementById('progress');
const getfullscreen = document.getElementById('fullscreen');

const getcontainer = document.querySelector('.container');
const getopnfullscreen = document.querySelector('.openfullscreen');
const getclsfullscreen = document.querySelector('.closefullscreen');


const videos = ['samplevideo1', 'samplevideo2'];

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(vdo) {
    getvideoscreen.src = `./source/${vdo}.mp4`;
}

function playvdo() {

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');


    // play() methd came from video api
    getvideoscreen.play();
}

function pausevdo() {

    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    // pause() methd came from video api
    getvideoscreen.pause();
}

function playpausevdo() {
    //  paused keyword came from video api
    if (getvideoscreen.paused) {
        //getvideoscreen.play();
        playvdo();
    } else {
        //getvideoscreen.pause();
        pausevdo();
    }

}


function nextvdo() {
    curridx++;

    if (curridx > videos.length - 1) {
        curridx = 0;
    }

    // console.log(curridx);
    loadvideo(videos[curridx]);
    playvdo();

}

function prevvdo() {
    curridx--;

    if (curridx < 0) {
        curridx = videos.length - 1;
    }

    //  console.log(curridx);
    loadvideo(videos[curridx]);
    playvdo();
}

function updateprogress(){
    // console.log('hey')

    //currentTime came from video api 
    // console.log(getvideoscreen.currentTime);
    // console.log(getvideoscreen.duration);
    // console.log((getvideoscreen.currentTime / getvideoscreen.duration) * 100)

    progress.value = (getvideoscreen.currentTime / getvideoscreen.duration) * 100

}


// const getdoce = document.documentElement;

function openfullscreen() {

    if (getcontainer.requestFullscreen) {
        getcontainer.requestFullscreen(); //standard wec
    } else if (getdoce.mozRequestFullscreen) {
        getcontainer.mozRequestFullscreen(); //  firefox
    } else if (getdoce.webkitRequestFullscreen) {
        getcontainer.webkitRequestFullscreeen(); //chrome / safari
    } else if (getdoce.msRequestFullscreen) {
        getcontainer.msRequestFullscreen(); //microsoft pro/id/edge
    }

    getopnfullscreen.style.display = "none";
    getclsfullscreen.style.display = "inline-block";

}

function closefullscreen() {

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen();
    } else if (document.webkitExitFullscreeen) {
        document.webkitExitFullscreeen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }


    getopnfullscreen.style.display = "inline-block";
    getclsfullscreen.style.display = "none";

}



playbtn.addEventListener('click', playpausevdo);
nextbtn.addEventListener('click', nextvdo);
prevbtn.addEventListener('click', prevvdo);

getvideoscreen.addEventListener('timeupdate',updateprogress);


getopnfullscreen.addEventListener('click', openfullscreen);
getclsfullscreen.addEventListener('click', closefullscreen);




