// Global Scope

var a = 1;
let b = 2;
const c = 3;


if(true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`IF Scope: ${a}, ${b}, ${c}`);
}


console.log(`Global Scope: ${a}, ${b}, ${c}`);