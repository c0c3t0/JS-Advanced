function solve(arr){
    arr.reduce((acc, val) => {
        if(val >= acc){
            console.log(val);
            acc = val;
        }

        return acc;
    }, Number.MIN_SAFE_INTEGER)
}



solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);