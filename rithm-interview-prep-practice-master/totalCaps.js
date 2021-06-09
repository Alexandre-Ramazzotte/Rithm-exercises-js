// add whatever parameters you deem necessary - good luck!
function totalCaps(arr){
    let count = 0;
    for (element of arr)
    {
        for (let i = 0; i < element.length; i++)
        {
            if (element.charCodeAt(i) > 64 && element.charCodeAt(i) < 91) count++;
        }
    }
    return count;
}