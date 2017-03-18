function main(lines) {
    var nf = true;
    for(var i = 0, l = lines.length; nf && i < l; i++) {
        if(parseInt(lines[i]) === 42) {
            nf = false;
        }
        else {
            console.log(lines[i]);
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

