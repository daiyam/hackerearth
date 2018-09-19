"use strict";

function main(lines) {
	let data;
	for(let i = 1, l = lines.length; i < l; i++) {
		data = lines[i].split(' ').map(Number);
	
		console.log(search(data[0], data[1], data[2], data[3]));
	}
}

function search(a, b, c, k) {
	let lb = 0;
	let up = Math.ceil(Math.sqrt(k));
	let r = k;
	let m;
	
	while(lb <= up) {
		m = Math.floor((lb + up) / 2);
		
		if(((a * m * m) + (b * m) + c) < k) {
			lb = m + 1;
		}
		else {
			if(r > m) {
				r = m;
			}
			
			up = m - 1;
		}
	}
	
	return r;
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let stdin_input = '';

process.stdin.on('data', function(input) {
	stdin_input += input;
});

process.stdin.on('end', function() {
	main(stdin_input.split(/\n/g));
});