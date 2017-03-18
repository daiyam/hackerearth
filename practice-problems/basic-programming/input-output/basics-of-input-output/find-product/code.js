var mod = Math.pow(10, 9) + 7;

function main(lines) {
    console.log(lines[1].split(' ').map(Number).reduce(function(answer, value) {
        return (answer * value) % mod;
    }, 1));
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

