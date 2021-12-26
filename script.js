function addExample() {
    let elements = document.getElementById("target");
    let copied = elements.lastElementChild.cloneNode(true);
    elements.appendChild(copied);
};
			
function calc(){
    k1= FF.start_time.value+":";
    k2= FF.end_time.value+":";
    s1=k1.split(":");
    s2=k2.split(":");
    v1= 60*parseInt(s1[0])+parseInt(s1[1]);
    v2= 60*parseInt(s2[0])+parseInt(s2[1]);
    sabun=Math.abs( v1-v2 )
    xhh=Math.floor( sabun/60 );
    xmm=sabun%60 ;
    FF.RS.value= xhh+":"+xmm;
};

const btn = document.getElementById("add");
btn.addEventListener("click", addExample, false);