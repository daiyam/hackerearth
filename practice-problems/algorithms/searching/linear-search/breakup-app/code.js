var regex = /(\d+)/g;

function main(lines) {
    var dates = {};
    var array = [];
    
    var match;
    for(var i = 1; i < lines.length; i++) {
        while((match = regex.exec(lines[i]))) {
            if(dates[match[1]]) {
                dates[match[1]].count++;
            }
            else {
                array.push(dates[match[1]] = {
                    date: match[1],
                    count: 1
                });
            }
        }
    }
    
    if(array.length === 0) {
        console.log('No Date');
    }
    else if(array.length === 1) {
        if(array[0].date === '19' || array[0].date === '20') {
            console.log('Date');
        }
        else {
            console.log('No Date');
        }
    }
    else {
        array.sort(function(a, b) {
            return b.count - a.count;
        });
        
        var max = array[0].count;
        array = array.filter(function(value) {
            return value.count === max;
        });
        
        var nf = true;
        for(var i = 0; nf && i < array.length; i++) {
            if(array[i].date === '19' || array[i].date === '20') {
                console.log('Date');
                
                nf = false;
            }
        }
        
        if(nf) {
            console.log('No Date');
        }
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

