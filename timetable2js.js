function saveTrainer(){
    console.log('Save Called');
    name=document.getElementById('tname').value
    skill1=document.getElementById('tskills').value
    skill2=document.getElementById('tskills2').value
    let cl="no"
    // SAVE 
    data=`{"name":"${name}", "skill1":"${skill1}","skill2":"${skill2}","class":"${cl}"}`
    localStorage.setItem(`${name}`,`${data}`)
    console.log("data saved");
}

function selectTrainer(){
    subject=document.getElementById("subject").value;
    console.log(subject);
    tlist=""
    if(subject=="math"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if((n.skill1== "math"||n.skill2=="math")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none" 
            }
        })
    }
    //PHYSICS
    if(subject=="physics"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if((n.skill1== "physics"||n.skill2=="physics")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none" 
            }
        })
    }
    if(subject=="biology"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if((n.skill1== "biology"||n.skill2=="biology")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none"
                tlist+=`<option value=${val}>no trainer</option>` 
            }
        })
    }
    if(subject=="english"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if((n.skill1== "english"||n.skill2=="english")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none"
                
            }
        })
    }
    if(subject=="chemistry"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if((n.skill1== "chemistry"||n.skill2=="chemistry")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none"
                 
            }
        })
    }
    if(subject=="cs"){
        Object.keys(localStorage).forEach((e)=>{
            let n=JSON.parse(localStorage.getItem(e));
            if((n.skill1== "cs"||n.skill2=="cs")&&(n.class!="full" )){
                console.log(n.class)
                
                console.log(n)
                tlist+=`<option value=${n.name}>${n.name}</option>`
                //tselect(tlist)
            }
            else{
                val= "none"
                 
            }
        })
    }

    
    
        console.log(tlist);
        document.getElementById("gettrainer").innerHTML=tlist;
    
}

function assign(){
    time=document.getElementById("slot").value;
    subject=document.getElementById("subject").value;
    trainername=document.getElementById("gettrainer").value;
    console.log(`${time},${subject},${trainername}`)
    formtable(time,subject,trainername)
    Object.keys(localStorage).forEach((e)=>{
        let n=JSON.parse(localStorage.getItem(e));
        if(n.name==trainername){
        if(n.class!="full"){
            if(n.class=="no"){
                console.log(n.class)
                n.class="assigned1";
                localStorage.setItem(e,JSON.stringify(n));
                console.log(n.class)
                }
            else if(n.class=="assigned1"){
                    console.log(n.class)
                    n.class="assigned2";
                    localStorage.setItem(e,JSON.stringify(n));
                    console.log(n.class)
                    }
            else if(n.class=="assigned2"){
                        console.log(n.class)
                        n.class="full";
                        localStorage.setItem(e,JSON.stringify(n));
                        console.log(n.class)
                        }
            }
        }
    })
    
}

function formtable(time,subject,trainername){
    if(time=="10to11"){
        fillsess1(time,subject,trainername)
    }
    if(time=="11to12"){
        fillsess1(time,subject,trainername)
    }
    if(time=="12to1"){
        fillsess1(time,subject,trainername)
    }
    if(time=="1to2"){
        fillsess1(time,subject,trainername)
    }
    if(time=="3to4"){
        fillsess1(time,subject,trainername)
    }
    if(time=="4to5"){
        fillsess1(time,subject,trainername)
    }
}
function fillsess1(time,subject,trainername){
    data=`<table>
            <tr>
                <th>${subject}<th>
            </tr>
            <tr>
                <td>${trainername}<td>
            </tr>
            </table>`
    if(time=='10to11')
    document.getElementById("sess1").innerHTML=data

    if(time=='11to12')
    document.getElementById("sess2").innerHTML=data

    if(time=='12to1')
    document.getElementById("sess3").innerHTML=data

    if(time=='1to2')
    document.getElementById("sess4").innerHTML=data

    if(time=='3to4')
    document.getElementById("sess5").innerHTML=data

    if(time=='4to5')
    document.getElementById("sess6").innerHTML=data
}

function initialization (){
    Object.keys(localStorage).forEach((e)=>{
        let n=JSON.parse(localStorage.getItem(e));
        if(n.class!="no"){
            n.class="no"
            localStorage.setItem(e,JSON.stringify(n));
        }
    })
}



