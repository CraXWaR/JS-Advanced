function solve(area, vol, input) {
    const params = JSON.parse(input)

    const result = []
    for (const cube of params) {
        const currRes = {
            area: area.call(cube),
            volume: vol.call(cube)
        }
        result.push(currRes)
    }
    return result;
}
console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));
    function area() {
        return Math.abs(this.x * this.y)
    }
    function vol() {
        return Math.abs(this.x * this.y * this.z)
    }