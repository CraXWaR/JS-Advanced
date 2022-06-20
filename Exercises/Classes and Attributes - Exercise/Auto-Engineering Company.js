function solve(arr) {
    let obj = arr.reduce((a, b) => {
        let [carBrand, carModel, producedCars] = b.split(' | ');
        if (a.hasOwnProperty(carBrand) == false) {
            a[carBrand] = [];
        }
        let currModelObj = a[carBrand].find(e => Object.keys(e)[0] == carModel);

        if (currModelObj == undefined) {
            a[carBrand].push({ [carModel]: Number(producedCars) });
        } else {
            currModelObj[carModel] += Number(producedCars);
        }

        return a;
    }, {});
    const modelParse = (e) => `###${Object.entries(e).map(e => `${e[0]} -> ${e[1]}`)}`;
    const brandParse = (e) => `${e[0]}\n${e[1].map(modelParse).join('\n')}`;
    return Object.entries(obj).map(brandParse).join('\n');
}
console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'Audi | Q7 | 1000',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
))
