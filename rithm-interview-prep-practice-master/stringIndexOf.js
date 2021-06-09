// add whatever parameters you deem necessary - good luck!
function stringIndexOf(str, char){
    for (index in str)
    {
        if (str[index] == char) return Number(index);
    }
    return -1;
}

console.log(stringIndexOf('hello world', 'd'));