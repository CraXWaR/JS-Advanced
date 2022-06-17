function solve(input) {
    let regex = /(\w+)/g;
    let regexMatches = input.match(regex);
    let arrUpperCase = [];
 
    for (let i = 0; i < regexMatches.length; i++) {
        arrUpperCase.push(regexMatches[i].toUpperCase());
    }
 
    console.log(arrUpperCase.join(', '));
}
solve('Hi, how are you?')