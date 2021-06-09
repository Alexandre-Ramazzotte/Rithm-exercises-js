// add whatever parameters you deem necessary - good luck!
function indexOf(arr, element){
    for (index in arr)
    {
        if (arr[index] == element) return Number(index);
    }
    return -1
}