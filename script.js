function addExample() {
    let elements = document.getElementById("flow");
    //console.log(elements)
    let copied = elements.lastElementChild.cloneNode(true);
    elements.appendChild(copied);
};
			
function calc(obj){
    console.log(obj[0].children)
    k1= obj[0].children.start_time.value+":";
    k2= obj[1].children.end_time.value+":";
    s1=k1.split(":");
    s2=k2.split(":");
    v1= 60*parseInt(s1[0])+parseInt(s1[1]);
    v2= 60*parseInt(s2[0])+parseInt(s2[1]);
    sabun=Math.abs( v1-v2 )
    xhh=Math.floor( sabun/60 );
    xmm=sabun%60 ;
    obj[4].children.time_required.value= ('00' + xhh).slice(-2) +":" + ('00' + xmm).slice(-2);
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
    let form_list = flow.getElementsByTagName('tr');
    
    for(let i = 0;i < form_list.length;i++){
        console.log(form_list[i])
        var data = form_list[i].getElementsByTagName('td')
        //console.log(data[0].children)
        output.innerHTML += '[' + data[0].children[0].value + ' - ' +data[1].children[0].value +']　【'+data[2].children[0].value +'】'+data[3].children[0].value +'<br>'  ;
    }
    output.innerHTML += '<br><br><b>【今後のTODO】</b><br>';
    output.innerHTML += schedule.value.split("\n").join("<br>");
    
}

function createWorkTime(){
    let output = document.getElementById('output_wt');
    let flow = document.getElementById('flow');
    let form_list = flow.getElementsByTagName('tr');
    output.innerHTML = "<br><br><h3>作業時間出力</h3>"

    var wt_dict = {};
    var keylist = [];

    for(i = 0;i< form_list.length;i++){
        console.log(form_list[i].getElementsByTagName('td')[2].children[0].value)
        keylist.push(form_list[i].getElementsByTagName('td')[2].children[0].value);
    }
    keylist = [...new Set(keylist)];
    for(i=0; i < keylist.length;i++){
        wt_dict[keylist[i]] = 0;
    }
    for(i = 0;i< form_list.length;i++){
        wt_dict[form_list[i].getElementsByTagName('td')[2].children[0].value] += transStr2Min(form_list[i].getElementsByTagName('td')[4].children[0].value);
    }
    for(i=0; i < keylist.length;i++){
        hour = Math.floor(wt_dict[form_list[i].getElementsByTagName('td')[2].children[0].value]/60)
        min = wt_dict[form_list[i].getElementsByTagName('td')[2].children[0].value]%60
        output.innerHTML += keylist[i] +'　' +('00' + hour).slice(-2) +":" + ('00' + min).slice(-2)+'<br>';
    }

}

function transStr2Min(time){
    s1=time.split(":");
    v1= 60*parseInt(s1[0])+parseInt(s1[1]);
    return v1
}

function outputDaily(){
    createDailyReport();
    createWorkTime();
}
const add_btn = document.getElementById("add");
const create_btn = document.getElementById("create");

add_btn.addEventListener("click", addExample, false);
create_btn.addEventListener("click" , outputDaily,false);
