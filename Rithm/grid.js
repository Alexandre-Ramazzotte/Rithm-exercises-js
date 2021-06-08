function makeXOGrid (row, col) {
    let grid = [];
    for (let i = 0; i < row; i++) {
        let sub = [];
        for (let j = 0; j < col; j++) {
            if (j % 2 == 0) sub.push("X");
            else sub.push("O");
        }
        grid.push(sub);
    }
    return grid;
}

console.log(makeXOGrid(3,3));