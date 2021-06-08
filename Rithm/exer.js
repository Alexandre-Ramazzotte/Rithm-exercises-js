console.log(rotate([1,2,3], 1)); // [3,1,2]
console.log(rotate([1,2,3], 2)); // [2,3,1]
console.log(rotate([1,2,3], 3)); // [1,2,3]

function rotate (arr, rotate_value) {
    let newArr = [0,1];
    let len = arr.length;
    for (index in arr) {
        let position = Number(index) + Number(rotate_value);
        while (position > len -1) { 
            position = position - len;
        }
        newArr[position] = arr[index]; 
    }
    return newArr;
}

