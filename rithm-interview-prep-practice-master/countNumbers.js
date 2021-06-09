// add whatever parameters you deem necessary - good luck!
function countNumbers(arr){
    let count = 0;
    for (element of arr)
    {
        if (element != '' && element != ' ')
        {
            if (!isNaN(Number(element))) count++;
        }
    }
    return count;
}