// add whatever parameters you deem necessary - good luck!
function values(obj){
    let values = []
    for(key in obj)
    {
        values.push(obj[key]); 
    }
    return values;
}