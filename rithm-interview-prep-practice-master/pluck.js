// add whatever parameters you deem necessary - good luck!
function pluck(arr, key){
    let pluck = []
    for (element of arr)
    {
        pluck.push(element[key]);
    }
    return pluck;
}

console.log(pluck([
    { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
   'name'
  ))