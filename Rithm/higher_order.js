function randomGame () {
    let tries = 0;
    let timer = setInterval(function() {
        tries++;
        let num = Math.random();
        if (num > 0.75) {
            clearInterval(timer);
            console.log(`Number of tries to find a number greater than 0.75: ${tries}`);
        } 
    }, 1000);
}

function isEven (num) {
    return num % 2 === 0;
}

function isOdd (num) {
    return num % 2 !== 0;
}

function isPrime (num) {
    for (let i = 2; i <= num/2; i++) {
        if (num % i == 0) return false
    }
    return num > 1;
}

function numberFact (num, callback) {
    return callback(num);
}

function find (arr, condition) {
    for (element of arr) {
        if (condition(element)) return element
    }
}

function findIndex (arr, condition) {
    for (index in arr) {
        if (condition(arr[index])) return index
    }
}

function specialMultiply () {
    if (arguments.length == 2) return arguments[0] * arguments [1];
    let n = arguments [0]
    return function (n1) {
        return n * n1;
    }
}

console.log(specialMultiply(3,4)); // 12
console.log(specialMultiply(3)(4)); // 12
let multiply = specialMultiply(3); // returns a function 
console.log(multiply(3))