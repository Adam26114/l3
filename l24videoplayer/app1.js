// console.log('hi');
const getvideoscreen = document.getElementById('videoscreen');

const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const stopbtn = document.getElementById('stop');

const progress = document.getElementById('progress');
const getdisplaytime = document.getElementById('displaytime');
const getfullscreen = document.getElementById('fullscreen');

const getcontainer = document.querySelector('.container');
const getopnfullscreen = document.querySelector('.openfullscreen');
const getclsfullscreen = document.querySelector('.closefullscreen');

const videos = ['samplevideo1','samplevideo2'];

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(vdo){
	getvideoscreen.src = `./source/${vdo}.mp4`;
}

function playvdo(){

	playbtn.querySelector('i.fas').classList.remove('fa-play');
	playbtn.querySelector('i.fas').classList.add('fa-pause');

	// play() method came from video api
	getvideoscreen.play();
}

function pausevdo(){

	playbtn.querySelector('i.fas').classList.remove('fa-pause');
	playbtn.querySelector('i.fas').classList.add('fa-play');

	// pause() method came from video api
	getvideoscreen.pause();
}

function playpausevdo(){

	// paused keyword came from video api
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

	if(curridx > videos.length-1){
		curridx = 0;
	}

	// console.log(curridx);

	loadvideo(videos[curridx]);
	playvdo();
}

function previousvdo(){
	curridx -= 1;

	if(curridx < 0){
		curridx = videos.length-1;
	}

	// console.log(curridx);

	loadvideo(videos[curridx]);
	playvdo();
}


function updateprogress(e){

	
	// console.log(e.target);
	// console.log(e.srcElement);
	// console.log(this);

	
	//Method 2

	// const currenttime = e.target.currentTime;
	// const duration = e.target.duration;
	
	// console.log(currentTime,duration);
	
	//Method 3

	// const {currentTime} = e.target;
	// const {duration} = e.target;
	// const {currentTime,duration} = e.target;


	//Method 4
	const [currentTime,duration] = [e.target.currentTime,e.srcElement.duration];
	

	// object နဲ့ variabel ကြေညာမယ်ဆိုရင် variabel name ကို နောက်မှာပြန်ထည့်ပီးတော့ ရလာတဲ့  တစ်ခုလုံးကို variable ထဲပြန်ထည့်မယ် 

	// console.log(currentTime,duration);



	// currentTime came from video api
	// console.log(getvideoscreen.currentTime);

	// duration came from video api
	// console.log(getvideoscreen.duration);

	// console.log(getvideoscreen.currentTime / getvideoscreen.duration) * 100;

	progress.value = (getvideoscreen.currentTime / getvideoscreen.duration) * 100;

	if(getvideoscreen.currentTime === 0){
		progress.value = 0;
	}else{
		progress.value = (getvideoscreen.currentTime / getvideoscreen.duration) * 100;
	}

	let getmins = Math.floor(getvideoscreen.currentTime/60);
	// console.log(getmins);

	// if(getmins < 10 ){
	// 	// getmins = '0'+getmins;
	// 	getmins = '0'+String(getmins);
	// }

	// let getsecs = Math.floor(getvideoscreen.currentTime%60);
	// // console.log(getsecs);

	// if(getsecs < 10){
	// 	// getsecs = '0'+getsecs;
	// 	getsecs = '0'+String(getsecs);
	
	// console.log(getmin,getsec);
	// console.log(typeof getmin,typeof getsec);

	
	
	// getdisplaytime.innerText = `${getmins}:${getsecs}`;
	
	//Method 2
	
	
	// Noted : parstStart () must be string data type
	const
	
}





// const getdoce = document.documentElement;


function openfullscreen(){

	if(getcontainer.requestFullscreen){
		getcontainer.requestFullscreen(); //standard w3c
	}else if(getcontainer.mozRequestFullscreen){
		getcontainer.mozRequestFullscreen(); //firefox 
	}else if(getcontainer.webkitRequestFullscreen){
		getcontainer.webkitRequestFullscreen(); //chrome / safari
	}else if(getcontainer.msRequestFullscreen){
		getcontainer.msRequestFullscreen(); // microsoft pro/id/edge
	}

	getopnfullscreen.style.display = 'none';
	getclsfullscreen.style.display = 'inline-block';

}

function closefullscreen(){

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.mozCancelFullscreen){
		document.mozCancelFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}

	getopnfullscreen.style.display = 'inline-block';
	getclsfullscreen.style.display = 'none';
}


function setprogress(){
	// console.log('hay');
	// console.log((progress.value*getvideoscreen.duration)/100);

	getvideoscreen.currentTime = (progress.value*getvideoscreen.duration)/100;
}


playbtn.addEventListener('click',playpausevdo);
nextbtn.addEventListener('click',nextvdo);
prevbtn.addEventListener('click',previousvdo);


getvideoscreen.addEventListener('timeupdate',updateprogress);
progress.addEventListener('click',setprogress);

getopnfullscreen.addEventListener('click',openfullscreen);
getclsfullscreen.addEventListener('click',closefullscreen);

// 20VD
// 21VDO
