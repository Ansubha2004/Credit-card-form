let input=document.querySelectorAll(".input");
let submit=document.querySelector("button");
let form=document.querySelector("#form");
let proceed=document.querySelector("#popup");
let thank=document.querySelector("#thanku");
let loader=document.querySelector("#loader");
let cardno=document.querySelector("#cardno");
let cvc=document.querySelector("#cvccard");
let nam=document.querySelector("#namecard");
let date=document.querySelectorAll(".card1");
const input1=()=>{
    let l=input[0].value.trim().length;
    if(l!=0)
        {
            for(let ch of input[0].value)
                {
                    if(isNaN(ch)==false && ch!=" "){
                        error(input[0]);
                        return false;
                    }
                 }
            errorfree(input[0]);
            return true;
        }
    else{
        error(input[0]);
        return false;
    }
}
const input2=()=>{
    let l=input[1].value.length;
    if(l==12 && isNaN(input[1].value)==false)
        {
            errorfree(input[1]);
            return true;
        }
        error(input[1]);
        return false;
};
const input4=()=>{
    if(parseInt(input[3].value)>=24 && parseInt(input[3].value)<100 && input[3].value.length==2)
        {
            errorfree(input[3]);
            return true;
        }
        error(input[3]);
        return false;
};
const input5=()=>{
    let l=input[4].value.length;
    if(l==3 && isNaN(input[4].value)==false)
        {
            errorfree(input[4]);
            return true;
        }
        error(input[4]);
        return false;
};
const error=(x)=>{
    x.setAttribute("class","input redborder");
    let X=x.parentElement;
    X.children[X.childElementCount-1].setAttribute("style","");
    x.value="";
};
const errorfree=(x)=>{
    x.setAttribute("class","input");
    let X=x.parentElement;
    X.children[X.childElementCount-1].setAttribute("style","visibility:hidden");
    
};
let k=0;
submit.addEventListener("click",()=>{
    let arr=[input1(),input2(),true,input4(),input5()];
    
    setTimeout(()=>{

        for(let i of arr)
        {
            if(i==true)
                k=0;
            else
            {
                k=1;
                break;
            }
        }    
    if(k==0){
        thank.setAttribute("style","display:flex");
        form.setAttribute("style","display:none");
        proceed.addEventListener("click",()=>{setTimeout(()=>{
            let x=confirm("Do you want another form?");
            if(x==true)
                resetcard();
            else
            location.href="https://www.google.com/";},"1000");
        })
    }},"1000");
    for(let i=0;i<5;i++){
        if(arr[i]==true)
            cardupdate(input[i].value,i);
        else
        cardreset(i);
        }
});
const cardupdate=(val,index)=>{
    if(index==0)
        nam.innerText=val;
    if(index==1)
        cardno.innerText=val.slice(0,4).concat("  ".concat(val.slice(4,8).concat("  ".concat(val.slice(8)))));
    if(index==2)
        date[0].innerText=val;
    if(index==3)
        date[1].innerText=val;
    if(index==4)
        cvc.innerText=val;
};
const cardreset=(index)=>{
    if(index==0)
        nam.innerText="XXX";
    if(index==1)
        cardno.innerText="0000  0000  0000";
    if(index==2)
        date[0].innerText="MM";
    if(index==3)
        date[1].innerText="YY";
    if(index==4)
        cvc.innerText="000";
};
const resetcard=()=>{
    thank.setAttribute("style","display:none");
    console.log(thank);
    form.setAttribute("style","display:block");
    console.log(form);
    for(let i=0;i<5;i++)
        {
            if(i==2)
                input[i].value="01";
            else
            input[i].value="";
            cardreset(i);
        }
};