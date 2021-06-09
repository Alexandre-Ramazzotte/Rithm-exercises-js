// add whatever parameters you deem necessary - good luck!
function includes(col, value, index = 0){
    if (typeof col == 'string')
    {
        col = col.splice(0, index)
        for (element of col)
        {
            if (element == value) return true
        }
        return false;
    }
    if (col instanceof Array) {
        for (element of col) {
            if (element == value) return true;
        }
        return false;
    }
    else {
        for (key in col)
        {
            if (col[key] == value) return true;
        }
        return false;
    }    
}