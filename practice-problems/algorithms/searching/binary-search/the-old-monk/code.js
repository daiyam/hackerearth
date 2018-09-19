"use strict";

function main(lines) {
    const tc = parseInt(lines[0]);
    
    let a, b, last, max, i, j, m;
    for(let c = 0; c < tc; c++) {
        a = lines[(c * 3) + 2].split(' ').map(Number);
        b = lines[(c * 3) + 3].split(' ').map(Number);
        
        last = a.length - 1;
        
        max = 0;
        j = 0;
        
        while(j <= last) {
            j = searchEQRight(b, b[j], j, last);
            
            if((i = searchLTELeft(a, b[j], 0, j)) !== -1 && (m = j - i) > max) {
                max = m;
            }
            
            ++j;
        }
        
        console.log(max);
    }
}

function searchEQRight(values, target, a, b) {
    if(values[b] === target) {
        return b;
    }
    
    while(a < b) {
        if(values[a + 1] !== target) {
            return a;
        }
        
        ++a;
    }
    
    return a;
}

function searchEQLeft(values, target, a, b) {
    if(values[a] === target) {
        return a;
    }
    
    while(b > a) {
        if(values[b - 1] !== target) {
            return b;
        }
        
        --b;
    }
    
    return b;
}

function searchLTELeft(values, target, a, b) {
    let m;
    
    while(a <= b) {
        m = Math.floor((a + b) / 2);
        
        if(values[m] === target) {
            return searchEQLeft(values, target, 0, m);
        }
        else if(values[m] > target) {
            a = m + 1;
        }
        else {
            b = m - 1;
        }
    }
    
    return values[a] > target ? -1 : a;
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