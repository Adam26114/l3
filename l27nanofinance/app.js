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


const dummydatas = [
    {id:1,transtatus:true,remark:'Petty Cash',amount:1000,date:"2023-01-20"},
    {id:1,transtatus:false,remark:'Pen',amount:-20,date:"2023-01-20"},
    {id:1,transtatus:true,remark:'Other Income',amount:300,date:"2023-01-20"},
    {id:1,transtatus:false,remark:'Book',amount:-10,date:"2023-01-20"},
    {id:1,transtatus:false,remark:'Water',amount:-150,date:"2023-01-20"},
    {id:1,transtatus:false,remark:'Teamix',amount:-100,date:"2023-01-20"}
];

console.log(dummydatas);

openbtn.addEventListener('click',function(){
    gethisbox.classList.toggle('show');
})

function newtransaction(e){
    console.log('hay');
    e.preventDefault();
}

getform.addEventListener('submit',newtransaction);
// 25TR