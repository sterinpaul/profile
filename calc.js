bool=false
dot=false
function btnClick(num){
    let l=document.getElementById("display-text").value
    if(bool){
        document.getElementById("display-text").value=num
        bool=false
        dot=false
    }else{
        if(l.length<=11){
            document.getElementById("display-text").value+=num
        }else{
            document.getElementById("display-text").value=l
        }
    }
}
function btnDoubleZero(){
    let l=document.getElementById("display-text").value
    if(bool==false && l !=""){
        if(l.length<=10){
            document.getElementById("display-text").value+="00"
        }else{
            document.getElementById("display-text").value=l
        }
    }
}
function btnZero(){
    let l=document.getElementById("display-text").value
    if(bool==false && l !=""){
        if(l.length<=11){
            document.getElementById("display-text").value+="0"
        }else{
            document.getElementById("display-text").value=l
        }
    }
}
function btnDot(){
    if(bool){
        document.getElementById("display-text").value="."
        bool=false
    }else{
        if(dot){
            document.getElementById("display-text").value=l
        }else{document.getElementById("display-text").value+="."
        dot=true
        }
    }
}
function valueClear(){
    document.getElementById("display-text").value=""
    bool=false
    div=false
    multi=false
    minus=false
    plus=false
    dot=false
}
function backSpace(){
    l=document.getElementById("display-text").value.slice(0,-1)
    document.getElementById("display-text").value=l
}
function operatorPercent(){
    l=Number(document.getElementById("display-text").value)/100
    document.getElementById("display-text").value=l
}
function operatorDiv(){
    firstValue=document.getElementById("display-text").value
    bool=true
    div=true
    multi=false
    minus=false
    plus=false
}
function operatorMulti(){
    firstValue=document.getElementById("display-text").value
    bool=true
    div=false
    multi=true
    minus=false
    plus=false
}
function operatorSub(){
    firstValue=document.getElementById("display-text").value
    bool=true
    div=false
    multi=false
    minus=true
    plus=false
}
function operatorAdd(){
    firstValue=document.getElementById("display-text").value
    bool=true
    div=false
    multi=false
    minus=false
    plus=true
}
function answer(){
    secondValue=document.getElementById("display-text").value

    if(div===true){
        let result= Number(firstValue) / Number(secondValue)
        document.getElementById("display-text").value=result
    } else if(multi===true){
        let result= Number(firstValue) * Number(secondValue)
        document.getElementById("display-text").value=result
    } else if(minus===true){
        let result= Number(firstValue) - Number(secondValue)
        document.getElementById("display-text").value=result
    } else if(plus===true){
        let result= Number(firstValue) + Number(secondValue)
        document.getElementById("display-text").value=result
    } else{document.getElementById("display-text").value=""}
    bool=true
    div=false
    multi=false
    minus=false
    plus=false
    dot=false
}