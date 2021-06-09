// add whatever parameters you deem necessary - good luck!
function squareEvenNumbers(arr){
    let sum = 0;
    for (element of arr)
    {
        if (element % 2 == 0) sum += element *element;
    }
    return sum;
}