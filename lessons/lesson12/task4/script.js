"use strict";


// Задача 4. Розробити клас Baner


class Banner {
    constructor() {
        this.img = {
            firstImgur: `<img src='img/1.avif' alt=''>`,
            secondImgur: `<img src='img/2.jpg' alt=''>`,
            thirdImgur: `<img src='img/3.avif' alt=''>`
        },
        this.url = {
            firstUrl: `<a href="https://google.com">url</a>`,
            secondUrl: `<a href="youtube.com">url2</a>`,
            thirdUrl: `<a href="rozetka.com">url3</a>`
        },
        this.randomImg = '';
        this.RamdomUrl = '';
    }
    randomContent(){
        let imgKeys = Object.keys(this.img)
        let urlKeys = Object.keys(this.url)

        let randomIndexImg = Math.floor(Math.random() * imgKeys.length)
        let randomIndexUrl = Math.floor(Math.random() * urlKeys.length)

        this.randomImg = this.img[imgKeys[randomIndexImg]]
        this.randomUrl = this.url[urlKeys[randomIndexUrl ]]
        
    }
    posteRandomIndex(){
        return document.write(`${this.randomImg} ${this.randomUrl}`)
    }
}

let objBaner = new Banner()
objBaner.randomContent()
objBaner.posteRandomIndex()