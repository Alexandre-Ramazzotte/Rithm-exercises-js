// add whatever parameters you deem necessary - good luck!
function keys(obj){
    let keys = []
    for(key in obj)
    {
        if (!keys.includes(key)) keys.push(key); 
    }
    return keys;
}