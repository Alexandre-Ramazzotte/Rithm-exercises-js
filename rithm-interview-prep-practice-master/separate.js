// add whatever parameters you deem necessary - good luck!
function separate(arr){
    let cats = []
    let water = []
    let dogs = []
    for (element of arr)
    {
        if (element == 'cat') cats.push(element);
        if (element == 'water') water.push(element);
        if (element == 'dog') dogs.push(element);
    }
    return cats.concat(water, dogs);
}

console.log(separate(['dog','cat','water','cat']));