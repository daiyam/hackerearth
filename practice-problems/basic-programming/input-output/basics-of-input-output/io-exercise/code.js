function main(lines) {
	var n = parseInt(lines[0]);
	var s = lines[1];
	
	console.log(n * 2);
	console.log(s);
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
	
process.stdin.on("data", function (input) {
	stdin_input += input;
});
 
process.stdin.on("end", function () {
	main(stdin_input.split('\n'));
});