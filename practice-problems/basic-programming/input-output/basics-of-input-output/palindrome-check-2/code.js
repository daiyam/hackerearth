function main(input) {
    var n = Math.floor(input.length / 2);
    var l = input.length - 1;
    
    var palindromic = true;
    for(var i = 0; i < n && palindromic; i++) {
        if(input[i] !== input[l - i]) {
            palindromic = false;
        }
    }
    
    console.log(palindromic ? 'YES' : 'NO');
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input.split(''));
});

