// add whatever parameters you deem necessary - good luck!
function removeFromString(str, start, num){
    let newStr = str.split();
    newStr = newStr.splice(start, num);
    newStr = newStr.join('');
    return newStr;
}

console.log(removeFromString('Elie', 2, 2)) // 'El'
