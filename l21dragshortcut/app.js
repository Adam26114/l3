const getbox = document.querySelector('.box');
const getbtns = document.querySelector('.btns');
const getboxtitles = document.getElementById('boxtitle');

dragme(getbox);

getbox.addEventListener('click',function(){
    // getbtns.classList.toggle('show');

    getbtns.classList.add('show');
    // console.log(e.target);

    smallmenu(e.target);

});

function smallmenu(icobox){
    console.log(icobox)
    if(icobox.classList.contains('btn-icon')){
        console.log("yes")
    }else{
        console.log('no')
    }
}

getbox.addEventListener('dblclick',function(){
    // getbtns.classList.toggle('show');

    getbtns.classList.remove('show');
});


dragme(getbox);


function dragme(getele){
    // console.log(getele);

    var getcx,getcy,setcx,setcy;

    //design1 
    getele.onmousedown = getmousedown;

    // design 2
     if(getele){
        // console.log(getboxtitles);
        getboxtitles.onmousedown = getmousedown;
     }

    function getmousedown(e){
        // console.log('i am working');
        // console.log(e.target);

        getcx = e.clientX;
        getcy = e.clientY;
        // console.log(getcx,getcy);

        document.onmousemove = dragme;

        document.onmouseup = stopdragme;


        // console.log('step 1',getcx,getcy);

        // getbtns.classList.remove('show');

    }

    function dragme(e){
        // console.log(e.target);
        // console.log('new position',e.clientX,e.clientY);


        setcx = getcx - e.clientX;
        setcy = getcy - e.clientY;

        // reset for • new • pin • position
        getcx = e.clientX;
        getcy = e.clientY;

        // console.log(getcx,setcx);
        // console.log(getcx,setcy);

        // console.log('step 2',getcx,getcy);


        const btnleft = getele.offsetLeft;
        const btntop = getele.offsetTop;

        // console.log(btnleft,btntop);

        getele.style.left = (btnleft - setcx)+"px";
        getele.style.top = (btntop - setcy)+"px";

        // console.log(btnleft-setcx,btntop-setcy);

        getbtns.classList.remove('show');
    }

    function stopdragme(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}


// 21MM