let t1 = document.getElementById('t1')
let t2 = document.getElementById('t2')
let t3 = document.getElementById("t3")
t3.addEventListener('click',()=>{
    location.reload();
})
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
    let video1 = document.getElementById("myVideo1")
    
    if(length===7){
       result.innerText=(input+" is thala for a reason")
       result.style.display="block"
       video.style.display="inline"
       video1.style.display="none"
       t1.classList.toggle("hide")
       t2.classList.toggle("hide")
       t3.classList.toggle('view')
       video.volume=0.1
       video.play()
       video1.pause()
    }else{
        result.innerText=(input+" is not thala for a reason")
       result.style.display="block"
       video.style.display="none"
       video1.style.display="inline"
       t1.classList.toggle("hide")
       t2.classList.toggle("hide")
       t3.classList.toggle('view')
       video.pause()
       video1.volume=0.1
       video1.play()
    }
   }
}