window.onload = function(){
    
    let li = document.querySelectorAll(".yibufenul li");
    let yibufen = document.querySelector(".yibufen");
    let xiaoyu = document.querySelector(".yibufen .xiaoyu");
    let dayu = document.querySelector(".yibufen .dayu");


    let t = setInterval(move,5000);
    let now=next =0;
    let width = parseInt(getComputedStyle(li[now],null).width);


    dayu.onclick = function(){
        move();
    }
    xiaoyu.onclick = function(){
        movel();
    }

    yibufen.onmouseenter = function(){
            clearInterval(t);
        }
    yibufen.onmouseleave = function(){
        t = setInterval(move,5000);
    }



    function movel(){
        next--;
        if(next<0){
            next = li.length-1;
        }
        // animate(li[next],{zindex:10});
        // animate(li[now],{z-index:5});
        li[next].style.zIndex = "10";
        li[now].style.zIndex = "5";
        now = next;
    } 


    function move(){
        next++;
        if(next==li.length){
            next = 0;
        }
        // animate(li[next],{z-index:10});
        // animate(li[now],{z-index:5});
        li[now].style.zIndex = "5";
        li[next].style.zIndex = "10";
        now = next;
    } 

    let shizi = document.querySelector(".shizituandui");
    let peixun1 = document.querySelector(".shizituandui .peixun1");
    shizi.onmouseenter = function(){
        animate(peixun1,{bottom:0});
        // peixun1.style.bottom = "0";
    }
}