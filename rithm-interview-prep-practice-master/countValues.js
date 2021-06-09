// add whatever parameters you deem necessary - good luck!
function countValues(arr, value){
    let times = 0;
    for (element of arr)
    {
        if (element == value) times ++;
    }
    return times;
}