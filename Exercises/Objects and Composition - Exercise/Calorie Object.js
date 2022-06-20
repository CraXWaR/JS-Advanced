function solve(input) {
    let obj = {}

    for (let index = 0; index < input.length; index += 2) {
        let product = input[index]
        let call = Number(input[index + 1])

        obj[product] = call
    }
    console.log(obj);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])