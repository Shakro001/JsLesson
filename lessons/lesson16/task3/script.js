
"use strict";
// Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

class Reminder {
    static instance;
    constructor() {
        if (Reminder.instance) {
            return Reminder.instance;
        }
        Reminder.instance = this;
    }

    startReminder(message, interval) {
        this.message = message;
        this.count = 0;
        this.interval = setInterval(() => {
            this.count++;
            console.log(`${this.message}, count: ${this.count}`);
        }, interval);
    }

    stopReminder() {
        clearInterval(this.interval);
    }

    changeMessage(newMessage) {
        this.message = newMessage;
    }
}


