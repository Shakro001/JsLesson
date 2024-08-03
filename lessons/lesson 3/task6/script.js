"use strict"

let userNum = parseInt(prompt('скільки абзаців????????'))

for (let i = 0; i < userNum; i++) {
    document.write(
        `<h1>загаловок ${i + 1}
            `
    )
    for (let b = 0; b <= i; b++) {
        document.write(`
            <p>розділ ${i + 1} параграф ${b + 1}</p>
            `)
    }

}