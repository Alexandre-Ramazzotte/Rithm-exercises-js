// add whatever parameters you deem necessary - good luck!
function slice(arr, start, end = arr.length){
    let newStr = [], n = 0;
    if (end > arr.length -1) end = arr.length;
    for (let i = start; i < end; i++)
    {
        newStr[n] = arr[i];
        n++;
    }
    return newStr;
}
