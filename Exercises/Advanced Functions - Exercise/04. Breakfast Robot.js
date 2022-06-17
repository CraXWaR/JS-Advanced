function solution() {
    const macros = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    const recipe = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };
    const commandsMap = {
        restock: (elem, n) => {
            macros[elem] += n;
            return 'Success';
        },
        prepare: (list, n) => {
            const productNeeded = Object.entries(recipe[list]).map(e => [e[0], e[1] * n]);
            const isValid = productNeeded.every(e => macros[e[0]] > e[1]);

            if (isValid) {
                productNeeded.forEach(kvp => macros[kvp[0]] -= kvp[1]);
                return 'Success';
            }
            return `Error: not enough ${productNeeded.find(kvp => macros[kvp[0]] < kvp[1])[0]} in stock`;
        },
        report: () => Object.entries(macros).map(kvp => `${kvp[0]}=${kvp[1]}`).join(' '),
    };

    return function manage(str) {
        const [command, microelem, n] = str.split(' ');
        return commandsMap[command](microelem, Number(n));
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10")); // Success 
console.log(manager("restock flavour 10")); // Success 
console.log(manager("prepare apple 1")); // Success 
console.log(manager("restock fat 10")); // Success 
console.log(manager("prepare burger 1")); // Success 
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55