"use strict";




function ThreeNum(){
    const numOne = parseInt(prompt('first num: '))
    const numTwo = parseInt(prompt('second num: '))
    const numThreed = parseInt(prompt('3 num: '))
    
    let duoNum = 0;
    let plusNum = 0;
    let hundred = 0;

    
  if(numOne % 2 === 0){
    duoNum += 1;
  }if(numTwo % 2 === 0){
    duoNum += 1;
  }if(numThreed % 2 === 0){
    duoNum += 1;
  }

  if(numOne > 0){
    plusNum += 1;
  }if(numTwo > 0){
    plusNum += 1;
  }if(numThreed > 0){
    plusNum += 1;
  }

  if(numOne >= 100){
    hundred += 1;
  }
  if(numTwo >= 100){
    hundred += 1;
  }if(numThreed >= 100){
    hundred += 1;
  }

  document.write(`
    парних  ${duoNum} <br>
    додатні ${plusNum} <br>
    one hundred+:   ${hundred}
    `)



}





ThreeNum()