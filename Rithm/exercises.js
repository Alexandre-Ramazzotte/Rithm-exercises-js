function difference (a,b) {
    return a - b;
}

function difference (a,b) {
    return a * b;
}

function printDay (num) {
    switch (num) {
        case 1:
            console.log('Sunday');
            break;
        case 2:
            console.log('Monday')
            break; 
        case 3:
            console.log('Tuesday')
            break;
        case 4:
            console.log('Wednesday')
            break; 
        case 5:
            console.log('Thursday')
            break;
        case 6:
            console.log('Friday')
            break;  
        case 7:
            console.log('Saturday')
            break; 
        default:
            console.log('undefined')
            break;
    }
}

printDay(9)

array = [1,2,3,4]

function lastElement (arr) {
    if (arr == []) return undefined;
    return arr[arr.length - 1];
}

console.log(lastElement(array))

function numberCompare (a,b) {
    if (a == b) console.log('numbers are equal');
    else if (a > b) console.log('first is greater');
    else console.log('second is greater');
}

numberCompare(2,3)

function singleLetterCount (str, letter) {
    let strLower = str.toLowerCase();
    let letterLower = letter.toLowerCase();
    let qty = 0;
    for (element of strLower)
    {
        if (element == letterLower) qty++
    }
    return qty;
}

console.log(singleLetterCount('amazing','A')); // 2
console.log(singleLetterCount('Rithm School','o')); // 2

function multipleLetterCount(str) {
    let strLower = str.toLowerCase();
    let counter = {}, keys;
    for (element of strLower)
    {
        keys = Object.keys(counter);
        if (keys.includes(element)) counter[element] ++;
        else counter[element] = 1;
    }
    return counter;
}

console.log(multipleLetterCount("hello")); // {h:1, e: 1, l: 2, o:1}
console.log(multipleLetterCount("person")); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

function arrayManipulation(arr, command, location, value) {
    if (command == 'remove'){
        if (location == 'end') arr.pop();
        else arr.shift();
    }

    if (command == 'add'){
        if (location == 'end') arr.push(value);
        else arr.unshift(value);
    }
}

array = [1,2,3]

arrayManipulation(array, "remove", "end"); // 3
console.log(array);
arrayManipulation(array, "remove", "beginning"); // 1
console.log(array);
arrayManipulation(array, "add", "beginning", 20); // [20,1,2,3]
console.log(array);
arrayManipulation(array, "add", "end", 30); // [1,2,3,30]
console.log(array);

function isPalindrome(str) {
    let newStr = str.replace(/\s+/g, ''), cmp = [], n = 0;
    newStr = newStr.toLowerCase();
    for (let i = newStr.length -1; i >= 0; i--)
    {
        cmp[n] = newStr[i];
        n++; 
    }
    cmp = cmp.join ('');
    if (cmp == newStr) return true;
    return false
}

console.log(isPalindrome('hanNaH'))
