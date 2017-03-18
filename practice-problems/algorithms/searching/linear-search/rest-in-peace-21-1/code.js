function main(lines) {
    for(i = 1; i < lines.length; i++) {
        if(lines[i].indexOf('21') !== -1 || parseInt(lines[i]) % 21 === 0) {
            console.log('The streak is broken!');
        }
        else {
            console.log('The streak lives still in our heart!');
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

