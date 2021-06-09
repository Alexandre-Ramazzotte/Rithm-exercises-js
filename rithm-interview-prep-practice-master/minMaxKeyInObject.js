// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(obj) {
    let keys = Object.keys(obj);
    let min = Number(keys.reduce((a,b) => Number(a) < Number(b) ? a:b));
    let max = Number(keys.reduce((a,b) => Number(a) > Number(b) ? a:b));
    return [min, max];
}


