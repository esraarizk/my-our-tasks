function add() {
    console.log("Hi");
    "use strict";
    var div2 = document.getElementById("div2").value;
    var div4 = document.getElementById("div4").value;
    var sum = document.getElementById("div5");
    var x,
        y;
    x = Number(div2);
    y = Number(div4);
    if (isNaN(x)||isNaN(y)){
        sum.innerHTML="the plus of them is : sorry is not a number";
    alert("focus on what your write");
        
    }
    else{
       sum.innerHTML="the plus of them is : " +x+y;
    }
};



function pro(){
    "use strict"
    var y;
    y=prompt("say something");
   document.getElementById("ss").innerHTML=y;
};



function ddate() {
    "use strict";
    var x;
    x = new Date();
    console.log(x);
    document.getElementById("date").innerHTML=x;
};

function llength(){
    "use strict";
    var x = document.getElementById("length").value;
    document.getElementById("spp").innerHTML=(x.length+1);
};


function cool(){
    "use strict";
    var x = document.getElementById("cv");
    var y = document.getElementById("cco").value;
    x.style.background = y;
};

function arr(){
    var x = document.getElementById("df").value;
    if(isNaN(x)){
        alert("type valid numder please;");
        
    }else{
        arr[x];
        var y = ["one name of","second name is","third name is"];
        var i;
        for(i=0;i<x;i++){
            arr[i]=prompt("type element number"+(i+1));
            
        }for(i=0;i<x;i++){
            document.getElementById("vd").innerHTML=y[i]+arr[i];
        }
    }
   
    
    }
    
    
    
    


