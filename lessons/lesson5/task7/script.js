"use strict";



function randomImg(){
    document.write(`<img style='width: 70px;' src='img/${Math.floor(Math.random() * 4) + 1}.jpg'>`)
    document.write(Math.floor(Math.random() * 4) + 1)
}

randomImg()