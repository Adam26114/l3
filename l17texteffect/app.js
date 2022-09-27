const languages = ["Nodejs","Reactjs","Vuejs","Laravel"];
const colors = ["red","skyblue","violet","yellow"];
const gettxtani = document.querySelector('.txtani');

// console.log(languages);
// console.log(languages[0]); //give index take value
// console.log(languages[1]);
// console.log(languages[2]);
// console.log(languages[3]);

// console.log(languages.indexOf("Reactjs"));
// console.log(languages.indexOf("Laravel"));

// console.log(colors[languages.indexOf("Reactjs")]);
// console.log(colors[languages.indexOf("Vuejs")]);



// retur 0 - 3
function* generator(){

    var idx = 0;

    while(true){
        yield idx++;

        if(idx > 3){
            idx = 0;
        }
    }

}

const testnumber = generator();

// console.log(testnumber.next()); //{value: 0, done: false}
// console.log(testnumber.next().value); //1
// console.log(testnumber.next().value); //2
// console.log(testnumber.next().value); //3

// console.log(testnumber.next().value); //0
// console.log(testnumber.next().value); //1
// console.log(testnumber.next().value); //2
// console.log(testnumber.next().value); //3



function showword(word){
    // let x = 0;

    // // console.log(word);

    // gettxtani.innerHTML = "";

    // // gettxtani.innerHTML = word;
    // // gettxtani.innerHTML += word[0];
    // // gettxtani.innerHTML += word[1];

    // let showintval = setInterval(function(){

    //     gettxtani.innerHTML  = word[0];
    //     gettxtani.innerHTML += word[1];

    //     if(x >= word.lenght){
    //         clearInterval(showintval);
    //     }else{
    //         gettxtani.innerHTML += word[x];
    //     }

    // },500);
}

function deletoword(){

}


let gen = generator();
showword(languages[gen.next().value]);//Nodejs
// showword(languages[gen.next().value]);//Reactjs
// showword(languages[gen.next().value]);//Vuejs
// showword(languages[gen.next().value]);//Laravel
// showword(languages[gen.next().value]);//Nodejs







// Generator Function (function*)

// function* genfun(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const getgen = genfun();

// console.log(getgen.next().value); //1
// console.log(getgen.next().value); //2
// console.log(getgen.next().value); //3
// console.log(getgen.next().value); //underfined
// console.log(getgen.next().value); //underfined

// console.log(getgen.next()); //{value: 1, done:false}
// console.log(getgen.next().value); //2
// console.log(getgen.next().value); //3
// console.log(getgen.next().value); //undefined
