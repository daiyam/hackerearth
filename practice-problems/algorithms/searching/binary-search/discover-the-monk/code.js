"use strict";

function main(lines) {
    const array = lines[1].split(' ').map(Number).sort((a, b) => a - b);
    
    const last = array.length - 1;
    
    for(let i = 2, l = lines.length; i < l; i++) {
        console.log(search(array, parseInt(lines[i])));
    }
}

function search(values, target) {
    let a = 0;
    let b = values.length - 1;
    let m;
    
    while(a <= b) {
        m = Math.floor((a + b) / 2);
        
        if(values[m] === target) {
            return 'YES';
        }
        else if(values[m] > target) {
            b = m - 1;
        }
        else {
            a = m + 1;
        }
    }
    
    return 'NO';
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input.split(/\n/g));
});