function solve(number) {
    let input = String(number)
    let sum = 0 
    let isSame = true

    let firstNum = input[0]
    for (let index = 0; index < input.length; index++) {
        let curNum = +input[index]
        sum += curNum

        if (firstNum != curNum) {
            isSame = false
        }
    }
    console.log(isSame);
    console.log(sum);
}
solve(2222222)