var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

function main(lines) {
    var line, count, j, c;
    for(var i = 1; i < lines.length; i++) {
        line = lines[i];
        count = 0;
        
        for(j = 0; j < line.length; j++) {
            if(vowels.indexOf(line[j]) !== -1) {
                count++;
            }
        }
        
        console.log(count);
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

