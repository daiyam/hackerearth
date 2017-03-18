function factorial(value) {
    return value === 1 ? 1 : value * factorial(value - 1);
}

function main(input) {
    console.log(factorial(parseInt(input)));
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});

