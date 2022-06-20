let screen=document.getElementById("screen");
let buttons=document.querySelectorAll("button");
let textvalue="";
for(item of buttons){
    item.addEventListener("click",function(e){
           buttonText=e.target.innerText;
           console.log(buttonText);
           if(buttonText=="X"){
              buttonText="*";
              textvalue+=buttonText;
              screen.value=textvalue;
           }else if(buttonText=="AC"){
             textvalue="";
             screen.value=textvalue;
           }else if(buttonText=="="){
             textvalue=eval(textvalue);
             screen.value=textvalue;
           }else{
            textvalue+=buttonText;
            screen.value=textvalue;
           }
    })
}






























