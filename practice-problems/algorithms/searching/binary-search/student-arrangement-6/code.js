function main(lines) {
    var data = lines[0].split(' ').map(Number);
    var n = data[0];
    var m = data[1];
    var k = data[2];
    
    var classroom = [];
    for(var i = 0; i < m; i++) {
        classroom.push({
            index: i + 1,
            available: k
        });
    }
    
    var students = lines[1].split(' ');
    
    var notseated = 0;
    var max = m * k;
    var last = m - 1;
    var length = students.length;
    
    if(length > max) {
        notseated += length - max;
        length = max;
    }
    
    var student, index, row;
    for(var i = 0; i < length; i++) {
        student = parseInt(students[i]);
        
        index = search(classroom, student);
        
        row = classroom[index];
        
        if(row.index !== student) {
            ++notseated;
        }
        
        if(--row.available === 0) {
            classroom.splice(index, 1);
        }
    }
    
    console.log(notseated);
}

function search(values, target) {
    var a = 0;
    var b = values.length - 1;
    var m;
    
    if(values[a].index === target) {
        return a;
    }
    else if(values[b].index === target) {
        return b;
    }
    
    while(a !== b) {
         m = Math.floor((a + b) / 2);
        
        if(values[m].index === target) {
            return m;
        }
        else if(values[m].index > target) {
            b = m === a ? a : m - 1;
        }
        else {
            a = m === b ? b : m + 1;
        }
    }
    
    if(values[a].index < target) {
    	return a + 1 === values.length ? 0 : a + 1;
    }
    else {
    	return a;
    }
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