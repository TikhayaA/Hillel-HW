
function makeCount() {
     let count = 0;
     return function(){
        return count++;
    };
}
let counter = makeCount();
