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
    let video = document.getElementById("myVideo")
    
    if(length===7){
       result.innerText=(input+" is thala for a reason")
       result.style.display="block"
       video.style.display="inline"
       video.volume=0.1
       video.play()
    }else{
        result.innerText=(input+" is not thala for a reason")
       result.style.display="block"
       video.style.display="none"
       video.pause()
    }
   }
}