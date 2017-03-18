function main(input) {
    var l = input[0];
    var r = input[1];
    var k = input[2];
    
    var c = Math.floor((r - l) / k);
    
    var ml = l % k;
    var mr = r % k;
    if(ml === 0 || mr === 0 || ml > mr) {
        c++;
    }

    console.log(c);
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input.split(' '));
});

