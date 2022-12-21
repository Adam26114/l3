// Get Ui

const getvideoscreen = document.getElementById('videoscreen');
 
const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const stopbtn = document.getElementById('stop');

const progress = document.getElementById('progress');
const getdisplaytime = document.getElementById('displaytime')
const getfullscreen = document.getElementById('fullscreen');
const getcontainer = document.querySelector('.container');
const getopnfullscreeen = document.getElementById('opnfullscreen');
const getclsfullscreen = document.getElementById('clsfullscreen');

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

function playpausevdo(){
    //pasued keyword came from video api
    if(getvideoscreen.paused){
        // getvideoscreen.play();
        playvdo();
    }else{
        // getvideoscreen.pause();
        pausevdo();
    }
}

function nextvdo(){
    curridx++;

    if(curridx > videos.length - 1){
        curridx = 0;
    }

    // console.log(curridx);

    loadvideo(videos[curridx]);

    playvdo();
}

function previousvdo(){
    curridx -= 1 ;

    if(curridx < 0){
        curridx = videos.length - 1;
    }

    // console.log(curridx);

    loadvideo(videos[curridx]);
    playvdo();
}

function updateprogress(){
    // console.log('hay');
    // currentTime came from video api
    // console.log(getvideoscreen.currentTime);
    // console.log(getvideoscreen.duration);

    // console.log(getvideoscreen.currentTime / getvideoscreen.duration) * 100;

    progress.value = (getvideoscreen.currentTime / getvideoscreen.duration) * 100;

    let getmin = Math.floor(getvideoscreen.currentTime / 60);
    // console.log(getmin);

    if(getmin < 10){
        // getmins = '0'+getmins;
        getmins = '0'+String(getmins);
    }

    let getsecs = Math.floor(getvideoscreen.currentTime%60);
    // console.log(getsecs);

    if(getsecs < 10){
        // getsecs = '0'+getsecs;
        getsecs = '0'+String(getsecs)
    }

    getdisplaytime.innerText = `${getmn}:${getsecs}`;
}

function setprogress(){
    console.log('hay');
}

const getdoce = document.documentElement;

function openfullscreen(){
    if(getdoce.exitFullscreen){
        getcontainer.requestFullscreen();//standard w3c
    }else if(getcontainer.mozRequestFullscreen){
        getcontainer.mozRequestFullscreen();//standard w3c
    }else if(getcontainer.webkitRequestFullscreen){
        getcontainer.webkitRequestFullscreen();//standard w3c
    }else if(getcontainer.msRequestFullscreen){
        getcontainer.msRequestFullscreen(); // microsoft pro / id / edge
    }

    getopnfullscreeen.style.display = 'none';
    getclsfullscreen.style.display = 'inline-block';
}

function closefullscreen(){
    if(document.exitFullscreen){
        document.exitFullscreen(); //standard w3c
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen(); //standard w3c
    }else if(document.msExitFullscreen){
        document.msExitFullscreen(); // microsoft pro / id /  edge
    }

    getopnfullscreeen.style.display = 'inline-block';
    getclsfullscreen.style.display = 'none';
}

function updateprogress(){
    // console.log('hey');
    console.log((progress.value*getvideoscreen.duration)/100);
    getvideoscreen.currentTime =(progress.value*getvideoscreen.duration)/100
}

playbtn.addEventListener('click',playpausevdo);
nextbtn.addEventListener('click',nextvdo);
prevbtn.addEventListener('click',previousvdo);

getvideoscreen.addEventListener('timeupdate',updateprogress)
progress.addEventListener('click',setprogress);

getfullscreen.addEventListener('click',openfullscreen);

// 20VD

getopnfullscreeen.addEventListener('click',openfullscreen);
getclsfullscreen.addEventListener('click',closefullscreen)

// 21VDO