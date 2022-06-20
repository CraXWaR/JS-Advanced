function solve(arr, command) {
    if (command == 'asc') {
        arr = arr.sort((a, b) => a - b)
        return arr
    } else if (command == 'desc') {
        arr = arr.sort((a, b) => b - a)
        return arr
    }
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));