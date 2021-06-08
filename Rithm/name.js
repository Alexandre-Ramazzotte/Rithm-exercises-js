let displayFullName = (function(first, last){
    return {
        firstName: first,
        lastName: last
    }
})('Daniel', 'Alexandre Ramazzotte');

console.log(displayFullName)

function createCalculator(){
    return {
        add: function(a,b){
            return a + b;
        },
        subtract: function(a,b){
            return a - b;
        },
        multiply: function(a,b){
            return a * b;
        },
        divide: function(a,b){
            return a / b;
        }
    }
}

console.log(calc.mult)
