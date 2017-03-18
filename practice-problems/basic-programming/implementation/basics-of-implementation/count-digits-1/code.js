function main(input) {
    var digits = (new Array(10)).fill(0);
    
    for(var i = 0, l = input.length; i < l; i++) {
        digits[input[i]]++;
    }
    
    for(i = 0; i < 10; i++) {
        console.log(i + ' ' + digits[i]);
    }
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input.split('').map(Number));
});

