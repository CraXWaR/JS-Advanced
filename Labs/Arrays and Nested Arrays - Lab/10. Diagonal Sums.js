function solve(input) {
    let first = 0;
    let second = 0
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;

    input.forEach(array => {
        first += array[firstIndex++]
        second += array[secondIndex--]
    });
    console.log(first + ' ' + second);
}
solve([[20, 40],
[10, 60]])