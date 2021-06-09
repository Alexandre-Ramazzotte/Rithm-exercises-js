// add whatever parameters you deem necessary - good luck!
function repeat(str, repeat){
    let newStr = [];
    for (let i = 0; i < repeat; i++)
    {
        newStr.push(str);
    }

    return newStr.join('');
}