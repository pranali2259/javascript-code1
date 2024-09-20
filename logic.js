 let newButton=document.createElement("button");
 newButton.innerText="click me";
 newButton.style.color="white";
 newButton.style.backgroundColor="blue";
 document.querySelector("body").prepend(newButton);
 let btn1=document.querySelector("#btn1");
 let currmod="light";
 btn1.addEventListener("click",()=>{
    if(currmod==="light"){
        currmod="dark";
        document.querySelector("body").style.backgroundColor="black";
       
    }
    else{
       currmod="light"; 
        document.querySelector("body").style.backgroundColor="white"; 
    }
 })