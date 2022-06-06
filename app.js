
function makeCount() {
     let count = 0;
     return function(){
        return count++;
    };
}
let counter = makeCount()();
console.log(counter);
console.log(counter);