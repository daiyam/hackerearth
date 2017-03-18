function main(lines) {
    var orders = [{
        time: 0,
        weight: 0
    }];
    var weight = 0;
    
    var query, last, time, index;
    for(var i = 1; i < lines.length; i++) {
        query = lines[i].split(' ').map(Number);
        
        if(query[0] === 1) {
            weight += query[1];
            
            orders.push({
                time: query[2],
                weight: weight
            })
        }
        else {
            last = orders.length - 1;
            time = query[2] - query[1];
            
            if(time > orders[last].time) {
                console.log(0);
            }
            else {
                var index = search(orders, time, 0, last);
                
                console.log(orders[last].weight - orders[index].weight);
            }
        }
    }
}

function search(values, target) {
    var a = 0;
    var b = values.length - 1;
    var m;
    
    if(values[b].time <= target) {
        return b;
    }
    
    while(b - a > 1) {
         m = Math.floor((a + b) / 2);
        
        if(values[m].time === target) {
            return m - 1;
        }
        else if(values[m].time > target) {
            b = m;
        }
        else {
            a = m;
        }
    }
    
    return a;
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

