function solve(input) {
    let firstEl = +input.shift()
    let lastEl = +input.pop()

    return firstEl + lastEl
}
console.log(solve(['20', '30', '40']));