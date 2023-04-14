let ball = prompt("Type a value");

let lin1 = '';
let lin2 = '';

for(var i = 0; i<ball; i++) {
    if(i%2 == 0) {
        lin1 = lin1 + '3';
    }
    
    if(i%2 == 1) {
        lin1 = lin1 + 'E';
    }

}

for(var i = 0; i<ball; i++) {
    if(i%2 == 0) {
        lin2 = lin2 + 'E'
    }

    if(i%2 == 1){
        lin2 = lin2 +'3'
    }
}

for(var i = 0; i<ball; i++) {
    if(i%2 == 0) {
        console.log(lin1);
    }
    if(i%2 == 1) {
        console.log(lin2);
    }
}
