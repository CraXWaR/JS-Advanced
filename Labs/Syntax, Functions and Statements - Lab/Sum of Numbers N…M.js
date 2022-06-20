function solve(num1, num2) {
    let n1 = +num1
    let n2 = +num2
    let sum = 0
    for (let i = n1; i <= n2; i++) {
        sum += i
    }
    console.log(sum);
}
solve('-8', '20')