function solve(arr) {
    let obj = {}
    let result = {}
    
    for (const el of arr) {
        let [juice, quantity] = el.split(' => ')
        if (!obj.hasOwnProperty(juice)) {
            obj[juice] = 0;
        }
        obj[juice] += Number(quantity)

        if (obj[juice] >= 1000) {
            if (result.hasOwnProperty(juice) == false) {
                result[juice] = 0;
            }
            result[juice] += Math.trunc(obj[juice] / 1000)
            obj[juice] = obj[juice] % 1000;
        }
    }
    return Object.entries(result).map(e => e
                                .join(' => '))
                                .join('\n');
}
console.log(solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']));