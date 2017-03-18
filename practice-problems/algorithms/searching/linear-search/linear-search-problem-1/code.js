function main(lines) {
    var m = lines[0].split(' ').map(Number)[1];
    
    console.log(lines[1].split(' ').map(Number).lastIndexOf(m) + 1);
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

