//Get UI
const balance = document.getElementById('balance');
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


const dummydatas = [
    {id:1,transtatus:'+',amount:1000,remark:'Petty Cash'},
    {id:1,transtatus:'-',amount:-20,remark:'Pen'},
    {id:1,transtatus:'+',amount:300,remark:'Other Income'},
    {id:1,transtatus:'-',amount:-10,remark:'Book'},
    {id:1,transtatus:'-',amount:-150,remark:'Water'},
    {id:1,transtatus:'-',amount:-100,remark:'Teamix'}
];

// console.log(dummydatas);


const getlsdatas = JSON.parse(localStorage.getItem('transactions'));
let gethistories = localStorage.getItem('transactions') !== null ? getlsdatas : [];


//Initial App
function init(){
    getlistgroup.innerHTML = "";
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
    
    totalvalue();
}


init();

//Create new li to ul
function addtoui(transaction){
    // console.log(transtion);
    // console.log(transtion.amount , typeof transtion.amount );

    const newli = document.createElement('li');

    newli.innerHTML = `${transaction.remark} <span>${transaction.transtatus}${Math.abs(transaction.amount)}</span><span>${transaction.date}</span><button type="button" class="delete-btn" onclick="removetransaction(${transaction.id})">&times;</button>`;
    

    newli.className = 'list-group-item';

    newli.classList.add(transaction.transtatus === "+" ? 'inc' : 'dec');
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
            sign = "-";
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
            id:generateidx(),
            transtatus:sign,
            amount:sign ===  "-" ? Number(-getamount.value) : Number(getamount.value),
            date:getdate.value,
            remark:getremark.value
        };

        // console.log(transaction);

        
		gethistories.push(transaction);

		addtoui(transaction);

        totalvalue();

		updatelocalstorage();


        getamount.value = '';
        getdate.value = '';
        getremark.value = '';

        getamount.focus();
    }

    e.preventDefault();
}

//Update Local Storage
function updatelocalstorage(){	
	localStorage.setItem('transactions',JSON.stringify(gethistories));
}

function generateidx(){
	return Math.floor(Math.random() * 100000);
}

// console.log(generateidx());

function totalvalue(){
    const amounts = gethistories.map(gethistory=>gethistory.amount);
    // console.log(amount);

    
	// Method 1 
    // const result = amounts.reduce(function(total,curvalue){

    //     total += curvalue;

    //     return total;

    // },0).toFixed(2);

    
    // Method 2
    const totalresult = amounts.reduce((total,curvalue)=>(total += curvalue),0).toFixed(2);

    const debitresult = amounts.filter(amount=>amount > 0).reduce((total,curvalue)=>(total += curvalue),0).toFixed(2);

    const creditresult = (amounts.filter(amount=>amount < 0).reduce((total,curvalue)=>(total += curvalue),0)* -1).toFixed(2);

    balance.innerText = `${totalresult}`;
    moneydeb.textContent = `${debitresult}`;
    moneycrd.textContent = `${creditresult}`;

    
    // console.log(totalresult);
    // console.log(moneydeb);
    // console.log(moneycrd);
    

}

totalvalue();


function removetransaction(tranid){
    gethistories = gethistories.filter(gethistory => gethistory.id !== tranid);

    init();

    updatelocalstorage();

}




openbtn.addEventListener('click',function(){
    gethisbox.classList.toggle('show');
});

getform.addEventListener('submit',newtransaction);
// 25TR


//  var myarrs = [10,20,30,40,50,60,70,80,90,100];

// array.reduce(function(totalvalue,currentValue,currentIdex,array){},initialValue);

// var result = myarrs.reduce(function(total,curvalue,curidx,arr){

//     // console.log('this is total = ',total); //0 undefined //if we use 1 parament 10 undefinded
    
//     // console.log('this is curvalue = ',curvalue); //0 undefined //if we use 1 parament 20 undefinded

//     // console.log('this is curidx = ',curidx); // 0 tp 9 index number // if we use 1 parameter 1 tp 0 index 
    
//     // console.log(arr);


//     total += curvalue;
//     return total;

// },0);


// console.log(result);