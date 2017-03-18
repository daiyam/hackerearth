function search(values, target, a, b) {
    if(a + 1 === b) {
        if(values[a] >= target) {
            return a + 1;
        }
        else if(values[b] >= target) {
            return b + 1;
        }
        else {
            return -1;
        }
    }
    else {
        var m = Math.floor((a + b) / 2);
        if(target === values[m]) {
            return m + 1;
        }
        else if(target > values[m]) {
            return search(values, target, m, b);
        }
        else {
            return search(values, target, a, m);
        }
    }
}

function main(lines) {
    var transactions = lines[1].split(' ').map(Number);
    var t = transactions.length;
    
    var accumulations = [transactions[0]];
    for(var i = 1; i < t; i++) {
        accumulations.push(accumulations[i - 1] + transactions[i]);
    }
    
    var target, j, nf;
    for(var i = 3; i < lines.length; i++) {
        console.log(search(accumulations, parseInt(lines[i]), 0, t - 1));
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

