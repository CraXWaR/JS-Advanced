function solve(input) {
    input.sort((a, b) => a - b)
    let part = Math.floor(input.length / 2)
    let result = input.slice(part)

    return result
}
console.log(solve([4, 7, 2, 5]));