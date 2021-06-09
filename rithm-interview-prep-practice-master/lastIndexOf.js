function lastIndexOf(arr, element){
    for (let i = arr.length -1; i >= 0; i--)
    {
        if (arr[i] == element) return Number(i);
    }
    return -1
}