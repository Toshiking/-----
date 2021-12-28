function addExample() {
    let elements = document.getElementById("flow");
    let copied = elements.lastElementChild.cloneNode(true);
    elements.appendChild(copied);
};
			
function calc(obj){
    k1= obj.start_time.value+":";
    k2= obj.end_time.value+":";
    s1=k1.split(":");
    s2=k2.split(":");
    v1= 60*parseInt(s1[0])+parseInt(s1[1]);
    v2= 60*parseInt(s2[0])+parseInt(s2[1]);
    sabun=Math.abs( v1-v2 )
    xhh=Math.floor( sabun/60 );
    xmm=sabun%60 ;
    obj.time_required.value= '作業時間：'+('00' + xhh).slice(-2) +":" + ('00' + xmm).slice(-2);
};

function createDailyReport(){
    let output = document.getElementById('output');
    let work_content = document.getElementById('work_content');
    let schedule = document.getElementById('schedule');
    let flow = document.getElementById('flow')

    output.innerHTML = '<br><br><h3>日報出力</h3>本日の業務を終わります。お疲れ様でした！<br><br>';
    output.innerHTML += '<b>【業務内容】</b><br>';
    output.innerHTML += work_content.value.split("\n").join("<br>");
    output.innerHTML += '<br><br><b>【本日の業務の流れ】</b><br>';
    let form_list = flow.getElementsByTagName('form')
    for(let i = 0;i < form_list.length;i++)
        output.innerHTML += '[' + form_list[i][0].value + ' - ' +form_list[i][1].value +']　【'+form_list[i][2].value +'】'+form_list[i][3].value +'<br>'  ;
    
    
    output.innerHTML += '<br><br><b>【今後のTODO】</b><br>';
    output.innerHTML += schedule.value.split("\n").join("<br>");
    
}
const add_btn = document.getElementById("add");
const create_btn = document.getElementById("create");
add_btn.addEventListener("click", addExample, false);
create_btn.addEventListener("click" , createDailyReport,false);