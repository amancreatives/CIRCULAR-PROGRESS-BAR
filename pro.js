let number = document.querySelector("#no");
let ctr = 0;

setInterval(()=> {
    if(ctr == 65){
       clearInterval() 
    } else {
        ctr +=1
        number.innerHTML = ctr + "%"
    }
    
},30)