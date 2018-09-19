"use strict";

function main(lines) {
	let data = lines[1].trim().split(' ');
	
	const values = [parseInt(data[0])];
	const lengths = [1];
	
	for(let i = 1, l = data.length; i < l; i++) {
		add(values, lengths, parseInt(data[i]));
	}
	
	for(let i = 2, l = lines.length; i < l; i++) {
		data = lines[i].split(' ').map(Number);
		
		if(data[0] === 1) {
			add(values, lengths, data[1]);
		}
		else {
			values.pop();
			lengths.pop();
		}
		
		console.log(search(lengths));
	}
}

function add(values, lengths, target) {
	let value = 0;
	let length = 0;
	
	for(let i = values.length - 1; i >= 0; --i) {
		if(values[i] < target && values[i] > value && lengths[i] > length) {
			value = values[i];
			length = lengths[i];
		}
	}
	
	values.push(target);
	lengths.push(length + 1);
}

function search(values) {
	let value = values[values.length - 1];
	
	for(let i = values.length - 2; i >= 0; --i) {
		if(values[i] > value) {
			value = values[i];
		}
	}
	
	return value;
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