function main(input) {
    console.log(input.split('').map(function(value) {
        if(value >= 'a' && value <= 'z') {
            return value.toUpperCase();
        }
        else if(value >= 'A' && value <= 'Z') {
            return value.toLowerCase();
        }
        else {
            return value;
        }
    }).join(''));
}
 
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function(input) {
    stdin_input += input;
});
 
process.stdin.on("end", function() {
   main(stdin_input);
});