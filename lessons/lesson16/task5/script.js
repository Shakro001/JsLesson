


"use strict";

// Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів  
// Приклад.
// testsList= [
//   {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
//   {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля. 
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.




class MultChecker{

    constructor(){
        this.firstNum,
        this.secondNum,
        this.operation = '*',
        this.correctAnswer,
        this.userAnswer
        
    }

    MultCheckerTest(){
        this.firstNum = Math.floor(Math.random()*10+1)
        this.secondNum = Math.floor(Math.random()*10+1)
        this.correctAnswer = this.firstNum * this.secondNum
        this.userAnswer = parseInt(prompt(`${this.firstNum} * ${this.secondNum}??=:`))
    }




}
let testMultObj = new MultChecker()
testMultObj.MultCheckerTest()

// ---------------------------

class AddChecker{

    constructor(){
        this.firstNum,
        this.secondNum,
        this.operation = '+',
        this.correctAnswer,
        this.userAnswer
        
    }

    AddCheckerTest(){
        this.firstNum = Math.floor(Math.random()*10+1)
        this.secondNum = Math.floor(Math.random()*10+1)
        this.correctAnswer = this.firstNum + this.secondNum
        this.userAnswer = parseInt(prompt(`${this.firstNum} * ${this.secondNum}??=:`))
    }

}
let testAddChecker = new AddChecker()
testAddChecker.AddCheckerTest()

// ----------------------------


class TestData{
    constructor(){
    this.Mult = [testMultObj],
    this.Checker = [testAddChecker]

    }
}
let obj = new TestData()
console.log(obj)