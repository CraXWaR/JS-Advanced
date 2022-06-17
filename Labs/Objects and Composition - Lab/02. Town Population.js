function solve(input) {
    const result = {}

    for (const town of input) {
        const tokens = town.split(' <-> ')
        const name = tokens[0]
        let pop = Number(tokens[1])
        
        if (result[name] != undefined) {
            pop += result[name]
        }
        result[name] = pop
    }
    for (let [name, pop] of Object.entries(result)) {
        console.log(`${name} : ${pop}`);
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])