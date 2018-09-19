"use strict";

function main(lines) {
    let graph = {};
    
    let data = lines[0].split(' ').map(Number);
    let n = data[0];
    let m = data[1];
    
    for(let i = 1, l = m + 1; i < l; i++) {
        data = lines[i].split(' ').map(Number).sort();
        
        graph[data.join('_')] = true;
    }
    
    let q = parseInt(lines[m + 1]);
    
    for(let i = m + 2, l = m + 2 + q; i < l; i++) {
        data = lines[i].split(' ').map(Number).sort();
        
        console.log(graph[data.join('_')] ? 'YES' : 'NO');
    }
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

