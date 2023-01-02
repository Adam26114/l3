//Get UI
const getaudioscreen = document.getElementById('audioscreen');
const playbtn = document.getElementById('play'),
      prevbtn = document.getElementById('prev'),
      nextbtn = document.getElementById('next'),
      stopbtn = document.getElementById('stop'),
      getprogressctn = document.getElementById('progress-container'),
      progress = document.getElementById('progress'),
      getvolprogress = document.getElementById('volumeprogress'),
      getdisplaytime = document.getElementById('displaytime');



const audios = ['sample1','sample2','sample3'];

let curridx = 0;

playbtn.addEventListener('click',playpauseado);
prevbtn.addEventListener('click',previousado);
nextbtn.addEventListener('click',nextado);
stopbtn.addEventListener('click',stopado);

loadaudio(audios[curridx]);

function loadaudio(ado){
    getaudioscreen.src = `./source/${ado}.mp3`;
}

function playado(){
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    getaudioscreen.play();
}

function pauseado(){
    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    
    getaudioscreen.pause();
}

function playpauseado(){
    if(getaudioscreen.paused){
        playado();
    }else{
        pauseado();
    }
}

function previousado(){
    curridx--;
    if(curridx < 0){
        curridx = audios.length-1;
    }
    loadaudio(audios[curridx]);
    playado();
}

function nextado(){
    curridx++;
    if(curridx > audios.length-1){
        curridx = 0;
    }
    loadaudio(audios[curridx]);
    playado();
}

function stopado(){
    getaudioscreen.currentTIme = 0;
    progress.value = getaudioscreen.currentTime;
    pauseado();
}

