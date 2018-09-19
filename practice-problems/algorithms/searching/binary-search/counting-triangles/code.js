"use strict";

function main(lines) {
    const map = {};
    
    let unique = 0;
    
    let hash;
    for(let i = 1, l = lines.length; i < l; i++) {
        hash = lines[i].split(' ').map(Number).sort().join('_');
        
        if(map[hash]) {
        	if(map[hash] === 'U') {
        		map[hash] = 'N';
        		
        		--unique;
        	}
        }
        else {
        	map[hash] = 'U';
        	++unique;
        }
    }
    
    console.log(unique);
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