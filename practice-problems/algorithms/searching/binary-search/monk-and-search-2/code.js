"use strict";

function main(lines) {
    const array = lines[1].split(' ').map(Number).sort((a, b) => b - a);
    const last = array.length - 1;
    
    let data, index;
    for(let i = 3, l = lines.length; i < l; i++) {
        data = lines[i].split(' ').map(Number);
        index = search(array, data[1], 0, last);
        
        if(array[index] === data[1]) {
        	if(data[0] === 0) {
				while(array[++index] === data[1]) {
				}
				
				console.log(index);
			}
			else {
				while(array[--index] === data[1]) {
				}
				
				console.log(index + 1);
			}
        }
        else if(array[index] < data[1]) {
            console.log(index);
        }
        else if(array[index] > data[1]) {
            console.log(index + 1);
        }
    }
}

function search(values, target, a, b) {
    let m;
    
    if(values[a] <= target) {
        return a;
    }
    else if(values[b] >= target) {
        return b;
    }
    
    while(a <= b) {
        m = Math.floor((a + b) / 2);
        
        if(values[m] === target) {
            return m;
        }
        else if(values[m] > target) {
            a = m + 1;
        }
        else {
            b = m - 1;
        }
    }
    
    return a;
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