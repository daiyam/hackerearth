var primes = [67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113];
var last = primes.length - 1;
var memory = {};

function search(c) {
    if(c <= 67) {
        return 67;
    }
    else if(c >= 113) {
        return 113;
    }
    
    for(var i = 0; i < last; i++) {
        if(primes[i] <= c && c <= primes[i + 1]) {
            return c - primes[i] > primes[i + 1] - c ? primes[i + 1] : primes[i];
        }
    }
    
    return c;
}

function main(lines) {
    var t = parseInt(lines[0]);
    
    for(var i = 1; i <= t; i++) {
        console.log(lines[i * 2].split('').map(function(value) {
            if(memory[value]) {
                return memory[value];
            }
            else {
                return memory[value] = String.fromCharCode(search(value.charCodeAt(0)));
            }
        }).join(''));
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

