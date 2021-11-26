let graph = document.querySelector(".graph")
let li = document.getElementsByTagName("li")
let date = new Date().getDate()
let day = new Date()

for(let i=0; i<= 31;i++){
    graph.innerHTML += `<li>${i}</li>`
   
}
for(let i=0;i<li.length;i++){
    li[date].style.background="black"
    li[date].style.color="white"
   
    li[date].style.border="3px solid black"
    li[date].style.boxShadow="0px 0px 13px black"

    
}





Array.from(li).forEach((list)=>{
    list.addEventListener("click",(e)=>{
        if(e.target.textContent==date){
          
        list.style.width="100%"
        list.style.height="40%"
        list.style.zIndex="3"
        e.target.innerHTML = `${ day}`;
        }
        
      else if(e.target.textContent == day){
        list.style.width="7vmin"
        list.style.height="7vmin"
        e.target.innerHTML += ``;
        e.target.innerHTML = date;
      }
    
    })
})