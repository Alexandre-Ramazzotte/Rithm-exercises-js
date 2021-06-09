// add whatever parameters you deem necessary - good luck!
function twoHighest(arr){
    let first = arr.reduce((a,b) => a > b ? a:b)
    let indexF = arr.indexOf(first);
    arr.splice(indexF, 1);
    let second = arr.reduce((a,b) => a > b ? a:b)
    return [second, first];
}