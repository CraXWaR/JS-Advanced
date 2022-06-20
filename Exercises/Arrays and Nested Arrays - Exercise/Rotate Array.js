function solve(array, num) {
    for (let i = 0; i < num; i++) {
        let el = array.pop()
        array.unshift(el)
    }
    console.log(array.join(' '));
}
solve(['1',
    '2',
    '3',
    '4'],
    2)