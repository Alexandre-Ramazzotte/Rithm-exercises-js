var arr = [3, 5, 7];
arr.foo = '9';
    
for (var i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

console.log(arr)

for (var i of arr) {
  console.log(i); // logs "3", "5", "7"
  // it doesn't log "3", "5", "7", "hello"
}