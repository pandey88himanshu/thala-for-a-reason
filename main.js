function submit(){
    let input=document.getElementById("input").value
    let inputsplit=input.split("");

    if(isNaN(parseInt(input))){
        checkthala(input,inputsplit.length)
    }else{
        let sum=0;
        for(let i=0;i<inputsplit.length;i++)
            sum+=parseInt(inputsplit[i])
        
        checkthala(input,sum)
    }
    

   function checkthala(input,length){
    let result=document.getElementById("result")
    if(length===7){
       result.innerText=(input+" is thala for a reason")
       result.style.display="block"
       document.getElementById("myVideo").style.display="inline"
    }else{
        result.innerText=(input+" is not thala for a reason")
       result.style.display="block"
       document.getElementById("myVideo").style.display="none"
    }
   }
}