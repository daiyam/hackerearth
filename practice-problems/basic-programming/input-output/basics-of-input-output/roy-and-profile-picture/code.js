function main(lines) {
    var l = parseInt(lines[0]);
    
    var line;
    for(var i = 2, n = lines.length; i < n; i++) {
        line = lines[i].split(' ').map(Number);
        
        if(line[0] < l || line[1] < l) {
            console.log('UPLOAD ANOTHER');
        }
        else if(line[0] === line[1]) {
            console.log('ACCEPTED');
        }
        else {
            console.log('CROP IT');
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

