window.onload = function(){
    
    let shizi = document.querySelector(".shizituandui");
    let peixun1 = document.querySelector(".shizituandui .peixun1");
    let lis = document.querySelectorAll(".peixun1 li");
    // let list = document.querySelectorAll(".peixun1 tuzi1");
    // let lists = document.querySelectorAll(".peixun1 tuxiaozi1");
    let left = document.querySelector(".leftBtn");
    let right = document.querySelector(".rightBtn");
    shizi.onmouseenter = function(){
        animate(peixun1,{bottom:0});        
    }

    let width = parseFloat(getComputedStyle(lis[0],null).width);
    console.log(width);
    let now=0;
    lis[0].style.left=(0)+"px";
    lis[1].style.left=(width)+"px";
    lis[2].style.left=(2*width)+"px";
    lis[3].style.left=(3*width)+"px";
    left.onclick = function(){
        
        let li1 = now+1;
        let li2 = now+2;
        let li3 = now+3;
        if(li2 == lis.length-1){
            return;
        }
        if(now == lis.length){
            now ==0;
        }
        if(li1 > lis.length){
            li1 = li1-lis.length;
        }
        if(li2 > lis.length){
            li1 = li1-lis.length;
        }
        if(li1 > lis.length){
            li3 = li1-lis.length;
        }

        lis[now].style.left=(-width)+"px";
        lis[li1].style.left=(0)+"px";
        lis[li2].style.left=(1*width)+"px";
        lis[li3].style.left=(2*width)+"px";

        now --;
        
    }
    right.onclick = function(){
        
        let li1 = now+1;
        let li2 = now+2;
        let li3 = now+3;
        if(li3  == 0){
            return;
        }
        if(now == lis.length){
            now ==0;
        }
        if(li1 > lis.length){
            li1 = li1-lis.length;
        }
        if(li2 > lis.length){
            li1 = li1-lis.length;
        }
        if(li1 > lis.length){
            li3 = li1-lis.length;
        }
        if(now == 0){
            lis[now].style.left=(width)+"px";
            lis[li1].style.left=(2*width)+"px";
            lis[li2].style.left=(3*width)+"px";
            lis[li3].style.left=(0)+"px";
        }
        

        now ++;
        // if(now == 1){
        //  now == 0;
        // }
    }
}