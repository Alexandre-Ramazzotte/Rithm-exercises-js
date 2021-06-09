// add whatever parameters you deem necessary - good luck!
function removeFromString(str, start, num){
    str = str.split('');
    str.splice(start, num);
    str = str.join('');
    return str;
}

console.log(removeFromString('Elie', 2, 2)) // 'El'
