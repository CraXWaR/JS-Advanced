function solve(input, start, end) {
    let startIndex = input.indexOf(start) 
    let endIndex = input.indexOf(end) + 1

    let result = input.slice(startIndex, endIndex)

    return result
}
console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));