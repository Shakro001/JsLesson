"use strict";

class Dance {
  constructor() {
    (this.boy = ["Tim", "Jack", "Quattro", "Tashiro"]),
      (this.girl = ["Julia", "Lila", "Marya", "Angelina"]);
    this.randomDuoArr = this.getDuo();
  }

  getRandomIndex(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
  }
  getDuo() {
    let randomDuoArr = [];

    let boyArray = [...this.boy];
    let girlArray = [...this.girl];

    for (let i = 0; i < this.boy.length; i++) {
      const boyIndex = this.getRandomIndex(boyArray);
      const girlIndex = this.getRandomIndex(girlArray);

      let boy = boyArray.splice(boyIndex, 1)[0];
      let girl = girlArray.splice(boyIndex, 1)[0];

      randomDuoArr.push([girl, boy]);
    }

    return randomDuoArr;
  }
  getInterval() {
    let index = 0;

    return setInterval(() => {
      if (index < this.randomDuoArr.length) {
        document.write(
          `${this.randomDuoArr[index][0]} та ${this.randomDuoArr[index][1]} , `
        );
        index++;
      }
      
      else {
        clearInterval(this.interval); 
      }
    }, 5000);
  }
}

let obj = new Dance();
console.log(obj);
console.log(obj.getDuo());
console.log(obj.getInterval());
