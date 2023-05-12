// function displayNumber(num){
//     result.value+=num;
// }

// // AC

// function clearText(){
//     result.value ="";
// }

// // output
// function evaluateExp(){
//     result.value=eval(result.value);
//     // exp=result.value;
//     // output=eval(exp);
//     // result.value=output;
// }
// //clear
// function removeLastItem(){
//     currentExp=result.value;
//     result.value=currentExp.slice(0,-1)
// }



var screen = document.getElementById('scr')
var btns = document.querySelectorAll('.button')

// const btns=document.querySelectorAll('.byn');
function s_off(){
    scr.value=""
    scr.style.background="#636361"
    document.getElementsByName('screen')[0].placeholder=' ';
  
    // result.style.border="1px solid red"
    btns.forEach(btn=>{
        btn.disabled=true;
    })
}
// offscr()

function s_on() {

    scr.style.background="#a7af7c"
    document.getElementsByName('screen')[0].placeholder='0';

    btns.forEach(btn=>{
        btn.disabled=false
    })
    
}
onscr()

function equal(){
    try{
        scr.value = eval(scr.value)
    }
    catch{
        scr.value = 'Error!'
    }
}

function factorial(){
    var i, num, f
    f=1
    num = scr.value
    for(i=1; i<=num; i++){
        f = f*i
    }
    scr.value = f
}


function negate(){
    var num, neg
    num = scr.value
    neg = -parseFloat(num)
    scr.value = neg
}

function percentage(){
    var num, per
    num = scr.value
    per = eval(num/100)
    scr.value = per
}

// function s_off(){
//     $("#display").empty();
//     document.getElementById("display").style.background="#636361";
//     document.getElementById("display").style.border="1px solid #636361";
//     $('button').prop('disabled',true);
  
// }

// function s_on(){
//     $("display").empty();
//     document.getElementById("display").style.background="#edeaea";
//     document.getElementById("display").style.border="1px solid #edeaea";
//     $('button').prop('disabled',false);

   
// }
