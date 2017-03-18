function main(lines) {
    var n = parseInt(lines.shift());
    var soldiers = lines.shift().split(' ').map(Number);
    if(soldiers.length !== n) {
        for(var i = 1; i < n; i++) {
            soldiers.push(parseInt(lines.shift()));
        }
    }
    
    soldiers.sort(function(a, b) {
        return a -b;
    });
    
    var last = soldiers.length - 1;
    
    var index;
    for(var i = 1; i < lines.length; i++) {
        index = search(soldiers, parseInt(lines[i]), 0, last);
        
        console.log(index + 1, sum(soldiers, index));
    }
}

function sum(values, index) {
    var sum = 0;
    
    for(var i = 0; i <= index; i++) {
        sum += values[i];
    }
    
    return sum;
}

function search(values, target, a, b) {
    if(b - a === 1) {
        return values[b] > target ? a : b;
        
    }
    else {
        var m = Math.floor((a + b) / 2);
        if(values[m] > target) {
            return search(values, target, a, m);
        }
        else {
            return search(values, target, m, b);
        }
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

