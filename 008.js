const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
var num = 0;
var result = 0;

function promptInput (prompt, handler) {
    rl.question(prompt, input => {
        if (handler(input) !== false) {
            promptInput(prompt, handler);
        } else {
            rl.close();
        }
    });
}

promptInput('input here :', input => {
    if (isFinite(input)) {
        num = Number(input);
        result += angka;
        console.log(result);
    } else if (input === '=') {
        console.log('Hasil Akhir Anda Adalah : '+result);
        return false;
    } else {
        console.log('Masukkan hanya angka saja!');
    }
});