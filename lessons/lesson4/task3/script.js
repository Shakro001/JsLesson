"use strict";

// Інвестор вклав  тис. грн на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування)

let deposit = parseInt(prompt('скільки вкласти?'))
for(let i = 1; i<=20; i++){
    deposit += deposit*0.2

    document.write(`місяць ${i}: ${Math.round(deposit)} <br>`)
}

