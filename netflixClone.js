let email=document.querySelectorAll(".emailInput");
let startBtn=document.querySelectorAll(".startBtn");
let emailValue;
let errorMsg=document.querySelectorAll(".errorMsg");
let e1=document.querySelector(".e1");
let e2=document.querySelector(".e2");
let id;
// let emailInputBox=document.querySelector(".emailInput");


const checkAt=(emailVal)=>{
    let atVal=true;
    let at=0;
    for(let a of emailVal){
        if(a==="@")
        at++;
    }
    if(at!==1)
        atVal=false;
    if(emailVal[0]==="@" || emailVal[emailVal.length-1]==="@")
        atVal=false;
    return atVal;
}
const checkDot=(emailVal)=>{
    let dotVal=true;
    let dot=0;
    let dotIdx,atIdx=0;
    for(let a of emailVal){

        if(a==="."){
        dotIdx=emailVal.indexOf(".");
        dot++;
        }
        if(a==="@"){dotIdx=emailVal.indexOf("@")}
    }
    if(dot!==1){
        dotVal=false;
    }
    if(emailVal[0]==="." || emailVal[emailVal.length-1]===".")
        dotVal=false;
    if(dotIdx<atIdx)
        dotVal=false;

    return dotVal;
}

function error(whichEmail,id){
    console.log(whichEmail);
    whichEmail.style.borderColor="red";
    // e2.innerText="Invalid Email";

    console.log(id);
    if(id==="firstStartBtn")
    {e1.innerText="Invalid Email";}
    else if(id==="secondStartBtn")
    {e2.innerText="Invalid Email";}
}
function emailValidation(emailValue,whichEmail,id){
    //validating email
    if(emailValue.length===0){
        error(whichEmail,id);
    }
    else if(emailValue.length<6){
        error(whichEmail,id);
    }
    else if(!checkAt(emailValue)){
        error(whichEmail,id);
    }
    else if(!checkDot(emailValue)){
        error(whichEmail,id);
    }


}


startBtn.forEach((but)=>{
    but.addEventListener("click",()=>{
        let whichEmail;
        // let errorMsgID;
        errorMsg.innerText="";
        // whichEmail.style.borderColor="black";
        id=but.getAttribute("id");
        // errorMsgID=
        if(id==="firstStartBtn")
        {
            whichEmail=document.querySelector("#firstEmail");
            emailValue=whichEmail.value;
        }
        else if(id==="secondStartBtn")
        {
            whichEmail=document.querySelector("#secondEmail");
            emailValue=whichEmail.value;
        }
        // console.log(id);
        emailValue.trim();
    // console.log(emailValue);
        whichEmail.style.borderColor="gray";
    emailValidation(emailValue,whichEmail,id);
    

    
}
)
})
