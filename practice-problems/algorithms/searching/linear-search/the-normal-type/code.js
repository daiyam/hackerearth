function main(lines) {
    var elements = lines[1].split(' ');
    
    var last = elements.length - 1;
    var target = 0;
    
    var values = {};
    for(var i = 0; i <= last; i++) {
        if(!values[elements[i]]) {
            values[elements[i]] = true;
            ++target;
        }
    }
    
	var count = 0;
	var values = {};
	var t = 0;
	var first = 0;
	
	for(var i = 0; i <= last; i++) {
	    if(values[elements[i]]) {
	        ++values[elements[i]];
	    }
	    else {
	        values[elements[i]] = 1;
	        ++t;
	    }
	    
	    if(t === target) {
	        count += elements.length - i;
	        
	        // drop first element of subarray
	        --values[elements[first]];
	        
	        // while new subarray (without its first element)
	        // has still all the distinct elements,
	        // each element on the right of *i* give a new subarray.
	        while(values[elements[first++]] > 0) {
	            count += elements.length - i;
	            
	            --values[elements[first]];
	        }
	        
	        --t;
	    }
	}
	
	console.log(count);
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