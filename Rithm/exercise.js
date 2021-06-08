function each(arr, callback){
    for (element of arr)
    {
        callback(element);
    }
}

function map (arr, callback) {
    let newArr = [];
    for (element of arr)
    {
        newArr.push(callback(element));
    }
    return newArr;
}

function reject (arr, callback) {
    let newArr = [];
    for (element of arr) {
        if (!callback(element)) newArr.push(element);
    }
    return newArr;
}

console.log("first");
setTimeout(function(){
    console.log("second");
},0);
console.log("third");