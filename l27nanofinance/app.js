//Get UI
const getbalance = document.getElementById('balance');
const moneydeb = document.getElementById('money-deb');
const moneycrd = document.getElementById('money-crd');


const getform = document.getElementById('form');
const gettranstatues = document.querySelectorAll('.form-check-input');
const getamount = document.getElementById('amount');
const getdate = document.getElementById('date');
const getremark = document.getElementById('remark');

const openbtn = document.getElementById('open-btn');
const gethisbox = document.querySelector('.history-box');
const getlistgroup = document.getElementById('list-group');


// const dummydatas = [
//     {id:1,transtatus:'+',amount:1000,remark:'Petty Cash'},
//     {id:1,transtatus:'-',amount:-20,remark:'Pen'},
//     {id:1,transtatus:'+',amount:300,remark:'Other Income'},
//     {id:1,transtatus:'-',amount:-10,remark:'Book'},
//     {id:1,transtatus:'-',amount:-150,remark:'Water'},
//     {id:1,transtatus:'-',amount:-100,remark:'Teamix'}
// ];

// console.log(dummydatas);


const getlsdatas = JSON.parse(localStorage.getItem('transaction'));
let gethistories = localStorage.getItem('transaction') !== null ? getlsdatas : [];


//Initial App
function init(){
    getlistgroup,innerHTML = ""
    //Method 1
    
    // dummydatas.forEach(function(dummydata){
        //     // console.log(dummydata);
        
        //     addtoui(dummydata);
    // });

    //Method 2
    // dummydatas.forEach(dummydata=>addtoui(dummydata));
    
    //Method 3 ***
    // dummydatas.forEach(addtoui);


    gethistories.forEach(addtoui);
    

    
}


init();

//Create new li to ul
function addtoui(transtion){
    // console.log(transtion);
    // console.log(transtion.amount , typeof transtion.amount );

    const newli = document.createElement('li');

    newli.innerHTML = `${transtion.remark} <span>${transtion.transtatus}</span>${Math.abs(transtion.amount)} <span>${transtion.date}</span><button type="button" class="delete-btn">&times;</button>`;

    newli.className = 'list-group-item';

    newli.classList.add(transtion.transtatus === "+" ? 'inc' : 'dec');
    // console.log(newli);

    getlistgroup.appendChild(newli)

}


var sign = "-" ;

// get sign

gettranstatues.forEach(function(gettranstatues){
    gettranstatues.addEventListener('change',function(){
        // console.log(this.value);

        if(this.value === "debit"){
            sign = "+";
        }else if(this.value === "credit"){
            sign = "-"
        }
    });
});



function newtransaction(e){
    // console.log('hay');
    // console.log(sign);

    if(isNaN(getamount.value) || getamount.value.trim() === '' || getdate.value.trim() === '' || getremark.value.trim() === ''){
        alert('Ohh!!! Some data are missing.');
    }else{
        
        const transaction = {
            id:1000,
            transtatus:sign,
            amount:sign ===  "-" ? Number(-getamount.value) : Number(getamount.value),
            date:getdate.value,
            remark:getremark.value
        };

        // console.log(transaction);


        gethistories.push(transaction);

        addtoui(transaction);

    }


    e.preventDefault();
}

openbtn.addEventListener('click',function(){
    gethisbox.classList.toggle('show');
});

getform.addEventListener('submit',newtransaction);
// 25TR