// add whatever parameters you deem necessary - good luck!
function stringFromObject(obj){
    let str = ''
    for(key in obj)
    {
        str += `${key} = ${obj[key]}, `; 
    }
    str = str.split('');
    str.pop();
    str.pop();
    str = str.join('')
    return str;
}

console.log(stringFromObject({ a: 1, b: '2' }));
