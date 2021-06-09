// add whatever parameters you deem necessary - good luck!
function multiples(x, n){
    let mult = [];
    for (let i = 0; i < n; i++)
    {
        mult.push(x*(i +1))
    }
    return mult;
}

console.log(multiples(3, 4));