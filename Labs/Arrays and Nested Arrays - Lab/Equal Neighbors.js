function start(arr) {
    let res = 0;
    for (let r = 0; r < arr.length; r++) {
        for (let c = 0; c < arr[r].length; c++) {
            let el = arr[r][c];
            if (r < arr.length - 1 && el === arr[r + 1][c]) {
                res += 1;
            }
            if ((c < arr[r].length - 1) && (el === arr[r][c + 1])) {
                res += 1;
            };
        };
    };
    
    return res;
}
start([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])