// add whatever parameters you deem necessary - good luck!
function removeVowels(str){
    let newStr = str.replace(/a/gi, '');
    newStr = newStr.replace(/e/gi, '');
    newStr = newStr.replace(/i/gi, '');
    newStr = newStr.replace(/o/gi, '');
    newStr = newStr.replace(/u/gi, '');
    return newStr;
}

console.log(removeVowels("aeiou"));