// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(arr){
    let list = []
    for (element of arr)
    {
        if (!list.includes(element)) list.push(element);
        else return element;
    }
    return undefined;
}