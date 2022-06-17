function solve(array) {
    let num = 1
    let sorted = array.sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${num}.${sorted[i]}`);
        num++
    }
}
solve(["John", "Bob", "Christina", "Ema"])