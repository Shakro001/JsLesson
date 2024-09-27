"use strict";


function random(){
    let array = [
      "бажання1",
      "бажання2",
      "бажання3",
      "бажання4",
      "бажання5",
      "бажання6",
    ];
    let arrFilter = []
    for(let i = 0; i<3; i++){
        let randomNum = Math.floor(Math.random()*array.length)
        arrFilter.push(array[randomNum])
        
    }
    document.querySelector(".res").innerText = arrFilter;
   
}



window.onload = function(){
   random(); 
}

