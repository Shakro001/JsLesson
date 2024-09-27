"use strict";

// Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було 
// створити тільки один екземпляр цього класу.


class WorkAuto{
    static oneCopy
    constructor(driverName, autoModel, autoNumber){
        if(WorkAuto.oneCopy) return WorkAuto.oneCopy
        this.Name = driverName,
        this.Model = autoModel,
        this.AutoNumber = autoNumber,
        WorkAuto.oneCopy = this
    } 
    
    toString(){
        return WorkAuto.oneCopy
    }
}


let WorkAutoObj = new WorkAuto('Petro','BMW','o73645');
console.log(WorkAutoObj.toString());

