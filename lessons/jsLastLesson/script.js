

"use strict";



class Data{
    constructor(api,value=3){
        this.api = api,
        this.value = value,
        this.valueChecked = this.valueChecked()
    }

    valueChecked(){
        try{
            if(this.value > 10){
                throw new Error("owwww Error >>>> max value = 10 dog");
               
            }
        }catch(error){
            console.log(error.message)
            this.value = 1
        }finally{
            console.log('defoult value >>> 1')
        }
        
    }

    async getDataPhoto(){
        let imgList = []


        for(let i = 0; i<this.value; i++){
            
            try {
                const api = await fetch(this.api)
                if(api.ok){
                    const apiJson = await api.json()
                    console.log(`Json object >>> `,apiJson )
                    imgList.push(apiJson.message)
                    
                }
                
            } catch (error) {
                console.log(`Error >>>`, error)
            }
        }

        return imgList

    }



    
}


class Render{
    constructor(imgArr,value){
        this.img = imgArr,
        this.value = value,
        this.createdElements = []
    }

    createEL(){
        const createDiv = document.createElement('div')
        createDiv.classList.add('dogs-item')

        this.createImg = document.createElement('img')
        this.createImg.classList.add('dogs-img')

        createDiv.append(this.createImg)
        this.createdElements.push(this.createImg)
        return createDiv
    }

    render(wrapp){
        if(wrapp){
            for(let i = 0; i<this.value; i++){
                document.querySelector(wrapp).append(this.createEL())
            }
        }else{
            document.body.append(this.createEL())
        }
    }

    pasteImg() {
        this.img.forEach((el, index) => {
                this.createdElements[index].src = el;
        });
    }
}



const generateApiImg = new Data('https://dog.ceo/api/breeds/image/random', 5)
async function getMessageApi(){
    const message = await generateApiImg.getDataPhoto()
    console.log(message)
    
    const renderDOM = new Render([...message],message.length)
    renderDOM.render('.dogs-gallery-wrapper')
    renderDOM.pasteImg()
}
getMessageApi()


function buttonUpdate(){
    const buttonUpdate = document.querySelector('.update-button')
    buttonUpdate.addEventListener('click',()=>{
        location.reload()
    })
}

buttonUpdate()