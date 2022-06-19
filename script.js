let args = process.argv.slice(2);

let calc = require("./app-nwCalc");

let a = Number(args[0]);

let b = '';

let c = Number(args[2]);

if(args[1] == 's'){
    b = calc.soma(a,c);
}

else if(args[1] == 'sub'){
    b = calc.sub(a,c);
}

else if(args[1] == 'm'){
    b = calc.mult(a,c);
}

else if(args[1] == 'd'){
    b = calc.div(a,c);
}

console.log(b);