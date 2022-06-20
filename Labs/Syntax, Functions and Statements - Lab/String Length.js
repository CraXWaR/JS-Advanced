function solve(wordOne, wordTwo, wordThree) {
    let sum = wordOne.length + wordTwo.length + wordThree.length
    let avgLen = sum / 3;
    console.log(sum);
    console.log(Math.floor(avgLen));
}
solve('chocolate', 'ice cream', 'cake')