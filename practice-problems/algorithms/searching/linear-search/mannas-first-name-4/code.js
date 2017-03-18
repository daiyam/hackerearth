function main(lines) {
    var line, suvo, jit, current, next;
    for(var i = 1; i < lines.length; i++) {
        line = lines[i];
        suvo = 0;
        suvojit = 0;
        
        current = 0;
        while((next = line.indexOf('SUVO', current)) !== -1) {
            if(line.substr(next, 7) === 'SUVOJIT') {
                suvojit++;
                
                current = next + 7;
            }
            else {
                suvo++;
                
                current = next + 4;
            }
        }
        
        console.log('SUVO = ' + suvo + ', SUVOJIT = ' + suvojit);
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

