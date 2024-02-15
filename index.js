const fs = require('fs');
const readLine = require('node:readline');
const path = require('path');



const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Write ur task here', (answer) => {
    
    fs.writeFile('task.txt', answer, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('crated successfully');
        }
    })

    // fs.appendFile("task.txt", `\n${answer}`, (err) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log('appended');
    //     }
    // })
    rl.close();
});


