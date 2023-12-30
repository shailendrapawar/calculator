let display=document.querySelector('#display');
let answere="";

let num=document.querySelectorAll(".num-btn")
Array.from(num).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        answere=answere+e.target.innerHTML;
        display.value=answere;
    })
})

let operator=document.querySelectorAll(".operator");
Array.from(operator).forEach((button)=>{
   button.addEventListener("click",(e)=>{
    answere=answere+e.target.innerHTML;
    display.value=answere;
   })
})

document.querySelector("#equals").addEventListener("click",(e)=>{

    if(display.value==""){
        answere="enter some number";
        display.value=answere;
        answere="";
    }else{
        display.value=eval(answere);
        answere=display.value;
    }


})
const allClear=()=>{
    answere="";
    display.value=answere;
}
const del=()=>{
    answere=answere.slice(0,-1);
    display.value=answere;
}