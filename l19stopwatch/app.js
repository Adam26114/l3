const getdisplay = document.querySelector(".display");
const getstartbtn = document.querySelector(".start");
const getpausebtn = document.querySelector(".pause")
const getresetbtn = document.querySelector(".reset")


// var hours        = 0,
//     minutes      = 0,
//     seconds      = 0,
//     milliseconds = 0;

var [hours,minutes,seconds,milliseconds] = [0,0,0,0];
// console.log(seconds);

getstartbtn.addEventListener('click',starttime);
getpausebtn.addEventListener('click',pausetime);
getresetbtn.addEventListener('click',resettime);

var setivdisplay ;

function starttime(){
    // console.log("hey i am start time");

    setivdisplay = setInterval(showdisplay,100);

}

function pausetime(){
    // console.log("hey i am pause time");

    clearInterval(setivdisplay);
}

function resettime(){
    // console.log("hey i am reset time");
}

function showdisplay(){
    // console.log("hay hay hay. hee hee");

 
    milliseconds += 10;

    if(milliseconds === 1000){
        milliseconds = 0;

        seconds++;

        if(seconds === 60){

            seconds = 0;

            minutes++;

            if(minutes === 60){

                minutes = 0;

                hours++;
            }

        }
    }

    console.log(milliseconds);
    console.log(seconds);
    console.log(minutes);
}