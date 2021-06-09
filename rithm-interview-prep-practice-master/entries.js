// add whatever parameters you deem necessary - good luck!
function entries(obj){
    let entries = []
    for (key in obj)
    {
        entries.push([key, obj[key]]);
    }
    return entries;
}